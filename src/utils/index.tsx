
const COOKIE_NAME = 'es-';

export const validateAddresses = (address:string) => (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));

export const storeAddresses = (addresses:any) => localStorage.setItem(COOKIE_NAME, JSON.stringify(addresses));

export const restoreAddresses = () => {
	try {
		const storage_str = localStorage.getItem(COOKIE_NAME);
		if (storage_str)
			return JSON.parse(storage_str);
	} catch (e) {
		console.error('error while trying to restore storage');
	}
	return [];
}
