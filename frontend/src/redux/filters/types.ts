export enum SortPropertyEnum  {
    PRICE_DESC = 'totalPrice',
    PRICE_ASC = '-totalPrice',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
}
export enum SortNameEnum {
    PRICE_DESC = 'Price (DESC)',
    PRICE_ASC = 'Price (ASC)',
    TITLE_DESC = 'AlphaBet (DESC)',
    TITLE_ASC = 'AlphaBet (ASC)',
}

export enum CategoriesEnum {
    ALL = 'All',
    TSHIRT = 'T-Shirt',
    SHORTS = 'Shorts'
}

export type SortType = {
    name: SortNameEnum,
    sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
    currentCategory: CategoriesEnum,
    currentSort: SortType,
    sortChosen: boolean
}