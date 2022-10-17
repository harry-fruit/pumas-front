import _ from "lodash"

export const formData = (form: any) => {
    if (form) {
        form.classList.add("formData")
    
        const inputs:never[] = Array.from(document.querySelectorAll('.formData input, .formData select, .formData textarea'))
    
        if (form && inputs && _.isArray(inputs)){
            const formData = {};
            
            inputs.forEach(input => {
                formData[input['name']] = input['value']
            })
            
            return formData
        } else {
            return {};
        }
    } else {
        return {};
    }

}