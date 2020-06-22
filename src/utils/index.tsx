const STORAGE_NAME = 'esg';

export const validateAddresses = (address:string):boolean => 
   (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));

export const storeAddresses = (addresses: string[]):void => 
   localStorage.setItem(STORAGE_NAME, JSON.stringify(addresses));

export const restoreAddresses = ():Array<string> => {
	try {
		const storage_str = localStorage.getItem(STORAGE_NAME);
		if (storage_str)
			return JSON.parse(storage_str);
	} catch (e) {
		console.error('error while trying to restore storage');
	}
	return [];
};
