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
            <div className={`${style.categoriaProdutos} align-items-center`}>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[0]) }}>
                    <div className={`${style.categoria}`}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[0] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[1]) }}>
                    <div className={`${style.categoria}`}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[1] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[2]) }}>
                    <div className={`${style.categoria}`}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[2] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[3]) }}>
                    <div className={`${style.categoria}`}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[3] || '')}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}