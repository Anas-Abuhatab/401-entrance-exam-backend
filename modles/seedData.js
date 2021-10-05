'use strict';

class seed {
    constructor(data){
        this.id=data.id ;
        this.title=data.title ;
        this.description=data.description ;
        this.toUSD=data.toUSD ;
        this.image_url=data.image_url
    };
};

module.exports={seed}