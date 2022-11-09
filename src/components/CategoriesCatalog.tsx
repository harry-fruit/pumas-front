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

    const setActiveCategoryClass = (event, className:string) => {
        const categoryGroup = document.querySelector(`.${className}`) as any
        if (useCategoryFilter) {
            categoryGroup.className += ' activeCategory'
        } else {
            categoryGroup.classList.remove('activeCategory')
        }
    } 

    return (
        <div className={`text-center ${style.container}`}>
            <div className={`${style.categoriaProdutos} align-items-center`}>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[0]) }}>
                    <div className={`categoryGroup_${mainCategories[0]} ${style.categoria}`} onClick={(event) => {setActiveCategoryClass(event, `categoryGroup_${mainCategories[0]}`)}}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[0] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[1]) }}>
                    <div className={`categoryGroup_${mainCategories[1]} ${style.categoria}`} onClick={(event) => {setActiveCategoryClass(event, `categoryGroup_${mainCategories[1]}`)}}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[1] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[2]) }}>
                    <div className={`categoryGroup_${mainCategories[2]} ${style.categoria}`} onClick={(event) => {setActiveCategoryClass(event, `categoryGroup_${mainCategories[2]}`)}}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[2] || '')}</a>
                    </div>
                </div>

                <div className={`${style.categoriaProduto}`} onClick={() => { changeCategoryFilter(mainCategories[3]) }}>
                    <div className={`categoryGroup_${mainCategories[3]} ${style.categoria}`} onClick={(event) => {setActiveCategoryClass(event, `categoryGroup_${mainCategories[3]}`)}}>
                        <i className="fa-solid fa-wine-glass"></i>
                        <a className={`${style.nomeProduto}`} >{_.capitalize(mainCategories[3] || '')}</a>
                    </div>
                </div>

            </div>
        </div>
    )
}