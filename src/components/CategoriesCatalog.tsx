import _ from 'lodash';
import style from '../../src/styles/Catalog.module.css';

export const CategoriesCatalog = ({ 
    mainCategories, 
    hooks: { 
        useCategoryFilter, 
        setCategoryFilter,
        setItemsToShow,
        itemsData,
    }}) => {

    const changeCategoryFilter = (category: string) => {

        if (useCategoryFilter === category) {
            setCategoryFilter(null)
            setItemsToShow(itemsData)
        } else {
            setCategoryFilter(category)
            setItemsToShow({ [category]: itemsData[category] })
        };

    };

    return (
        <div className={`container text-center ${style.container}`}>
            <div className={`row ${style.categoriaProdutos} align-items-center`}>

                <div className={`col ${style.categoriaProduto}`} onClick={(event) => { changeCategoryFilter(mainCategories[0]) }}>
                    <div className={`${style.categoria} row align-items-center`}>
                        <i className="fa-solid fa-wine-glass col-md-2"></i>
                        <a className={`col-md-10  ${style.nomeProduto}`} >{_.capitalize(mainCategories[0] || '')}</a>
                    </div>
                </div>

                <div className={`col ${style.categoriaProduto}`} onClick={(event) => { changeCategoryFilter(mainCategories[1]) }}>
                    <div className={`${style.categoria} row align-items-center`}>
                        <i className="fa-solid fa-wine-glass col-md-2"></i>
                        <a className={`col-md-10  ${style.nomeProduto}`} >{_.capitalize(mainCategories[1] || '')}</a>
                    </div>
                </div>

                <div className={`col ${style.categoriaProduto}`} onClick={(event) => { changeCategoryFilter(mainCategories[2]) }}>
                    <div className={`${style.categoria} row align-items-center`}>
                        <i className="fa-solid fa-wine-glass col-md-2"></i>
                        <a className={`col-md-10  ${style.nomeProduto}`} >{_.capitalize(mainCategories[2] || '')}</a>
                    </div>
                </div>

                <div className={`col ${style.categoriaProduto}`} onClick={(event) => { changeCategoryFilter(mainCategories[3]) }}>
                    <div className={`${style.categoria} row align-items-center`}>
                        <i className="fa-solid fa-wine-glass col-md-2"></i>
                        <a className={`col-md-10  ${style.nomeProduto}`} >{_.capitalize(mainCategories[3] || '')}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}