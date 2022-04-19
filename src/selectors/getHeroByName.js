import { heroes } from "../data/heroes"

export const getHeroByName=(name='')=>{
    
    console.log(name)
    let nameHero=name.toLowerCase();
    
    if (nameHero==='') {
        return [];
    }
    
    return heroes.filter((hero)=> hero.superhero.toLocaleLowerCase().includes(nameHero));
    
}