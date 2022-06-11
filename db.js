import { Cocktails } from './db/cocktails.json';
import { Fish } from './db/fish.json';
import { Food } from './db/food.json';
import { Liquor } from './db/liquor.json';
import { Wine } from './db/wine.json';

function getDBS() {
    const dbs = [
        Cocktails,
        Fish,
        Food,
        Liquor,
        Wine

    ];
    return dbs;
}