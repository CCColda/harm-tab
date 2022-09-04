import Storage from './Storage';

export function Save(name: string, data: any) {
	if (Storage.findInRegistry(name))
		return false;

	Storage.addToRegistry(name);
	Storage.setKey(name, JSON.stringify(data));
}

export function Load(name: string): object | null {
	if (!Storage.findInRegistry(name))
		return null;

	return JSON.parse(Storage.getKey(name));
}