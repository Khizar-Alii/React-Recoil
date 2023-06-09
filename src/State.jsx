import { atom , selector } from "recoil";
export const recoilCount = atom({
    key : 'count',
    default : 0
})
export const modifier = atom({
    key : 'modifier',
    default : 0
})
export const recoilSelector = selector({
    key : 'count-modifier',
    get : ({get}) => {
        const count = get(recoilCount);
        const countModifier = get(modifier)
        return count * countModifier;
    }
})