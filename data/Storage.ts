export default class Storage {
	private storageObject: typeof localStorage;

	static identifier(id: string) {
		return id.replace(/[^a-z0-9_]/gi, "_");
	}

	constructor(storageObject: typeof localStorage) {
		this.storageObject = storageObject;
	}

	storeJSON<T>(identifier: string, data: T) {
		this.storageObject.setItem(identifier, JSON.stringify(data));
	}

	getJSON<T>(identifier: string) {
		return JSON.parse(this.storageObject.getItem(identifier)) as T;
	}

	remove(identifier: string) {
		this.storageObject.removeItem(identifier);
	}

	exists(identifier: string) {
		return !!this.storageObject.getItem(identifier);
	}
};