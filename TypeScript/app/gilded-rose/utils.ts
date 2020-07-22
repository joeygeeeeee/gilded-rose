import {Item} from "./gilded-rose";

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

const isItemOfName = (name: string) => (item: Item) => item.name === name;

export const isAgedBrie = isItemOfName(AGED_BRIE);
export const isBackStagePasses = isItemOfName(BACKSTAGE_PASSES);
export const isSulfuras = isItemOfName(SULFURAS);

export const isLegendaryItem = isSulfuras

export const modifyQualityBy = (amount: number) => (item: Item): void => { item.quality += amount }
export const decreaseQualityBy1 = modifyQualityBy( -1)
export const increaseQualityBy1 = modifyQualityBy( 1)

const itemQualityLessThan50 = (item: Item): boolean => item.quality < 50


export const cloneItem = (item: Item): Item => new Item(item.name, item.sellIn, item.quality)

export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
    fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);

export const adjustBackstagePasses = (item: Item): void => {
    const hasQualityLessThan50 = itemQualityLessThan50(item)
    if (hasQualityLessThan50) {
        if (item.sellIn > 10) {
            modifyQualityBy(1)(item)
        } else if (item.sellIn > 5) {
            modifyQualityBy(2)(item)
        } else {
            modifyQualityBy(3)(item)
        }
    }
}


export const getCurrentItemAgeBy = (item: Item): number => {
    if (isLegendaryItem(item)){
        return 0
    }

    return 1
}
