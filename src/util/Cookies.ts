import _ from "lodash";

export const setAuthCookie = (key: string, value: string):void => {
    document.cookie = `${key}=${value}; path=/`
}

export const getAuthCookie = (key: string): string | null | undefined => {
    const decodedCookie = decodeURIComponent(document.cookie);
    const splited = decodedCookie.split(';')

    if (_.isArray(splited) && splited.length > 0) {

        let token: string | null = null;

        splited.forEach((element) => {
            const elementKey:string | undefined = element.split('=')[0];
            const elementValue:string | undefined = element.split('=')[1];
            if(_.isString(elementKey) && elementKey.trim() === key){
                token = elementValue;
            } else {
                return;
            };
        });

        return token;

    } else {
        return null;
    };
    
}