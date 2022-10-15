export default class Storage {
	private static readonly registry = "__registry";
	private static readonly count = "__count";

	private storageObject: typeof localStorage;

	constructor(storageObject: typeof localStorage) {
		this.storageObject = storageObject;
	}

	private transformName(name: string) {
		return name.replace(/[^a-zA-Z0-9_]/g, '_');
	}

	addToRegistry(name: string) {
		this.storageObject.setItem(Storage.registry, this.storageObject.getItem(Storage.registry) + "," + name);
		this.storageObject.setItem(Storage.count, `${this.count + 1}`);
	}

	findInRegistry(name: string) {
		const transformedName = this.transformName(name);

		return this.registry.some(v => v == transformedName);
	}

	removeFromRegistry(name: string): boolean {
		const registryData = this.registry;

		const index = registryData.findIndex(v => v == name);
		if (index == -1)
			return false;

		registryData.splice(index);
		this.storageObject.setItem(Storage.registry, registryData.join(','));
		this.storageObject.setItem(Storage.count, `${this.count - 1}`);

		return true;
	}

	get registry(): string[] {
		return (this.storageObject.getItem(Storage.registry) ?? "").split(',');
	}

	get count(): number {
		return Number(this.storageObject.getItem(Storage.count) ?? "0");
	}

	setKey(name: string, key: string) {
		this.storageObject.setItem(this.transformName(name), key);
	}

	getKey(name: string): string | null {
		return this.storageObject.getItem(this.transformName(name));
	}

	resetKey(name: string) {
		this.storageObject.removeItem(this.transformName(name));
	}
};