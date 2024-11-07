interface StorageCapacity {
    total : number,
    remaining : number
}

interface Item {
    itemName : string,
    requiredSpace : number,
    compatiblePlacement : string[]
}

enum ZIP_TYPES {
    mainZip = "mainZip",
    frontPocket = "frontPocket",
    sideMiniZip = "sideMiniZip"
}

interface BackpackZip {
    zipType : string,
    isOccupied : boolean,
    occupiedBy : Item | null
}

class BackpackClass {
    totalContainer : number = 0
    storageCapacity : StorageCapacity = {
        total : 0,
        remaining : 0
    }
    zips : BackpackZip[] 
    waterBottle = null

    constructor(totalContainer : number ,  totalStorageCapacity : number ,zips : string[] ){
        this.totalContainer = totalContainer
        this.storageCapacity.total = totalStorageCapacity
        this.storageCapacity.remaining = totalStorageCapacity
        this.zips = zips.map(i => ({zipType : i , isOccupied : false , occupiedBy : null}))
    }
    getBackpackInfo():object {
        return {
            totalContainer : this.totalContainer,
            storageCapacity : this.storageCapacity,
            zips : this.zips,
            waterBottle : this.waterBottle
        }
    }  

    addItem(itemObject : Item , zip : string):void {
        if(!itemObject.compatiblePlacement.includes(zip)) throw new Error("Item compatiblePlacement is not matched with zip")
        const backpackZip = this.zips.find(item => item.zipType === zip);
        if(!backpackZip) throw new Error("Backpack ziptype not found");
        if(backpackZip.isOccupied) throw new Error("Backpack Occupied");
        if(this.storageCapacity.remaining < itemObject.requiredSpace) throw new Error("No space in backpack")
        
        backpackZip.isOccupied = true,
        backpackZip.occupiedBy = itemObject,
        this.storageCapacity.remaining -= itemObject.requiredSpace

    }

    removeItem(zipType : String) : void {
        const zip = this.zips.find(item => item.zipType === zipType)
        if(!zip) throw new Error("Ziptype not found")
        if(zip.occupiedBy?.requiredSpace){
            this.storageCapacity.remaining += zip.occupiedBy?.requiredSpace    
        }
        zip.isOccupied = false
        zip.occupiedBy = null
    }
    
    isZipOccupied(zipType : string) : boolean {
        let item = this.zips.find(item => item.zipType === zipType)

        if(!item) {
          throw new Error("Ziptype not found")
        }
        return item.isOccupied
    }
}


const pen : Item = {
    itemName : "Pen",
    requiredSpace : 1,
    compatiblePlacement : [ ZIP_TYPES.frontPocket ,  ZIP_TYPES.sideMiniZip]
}

const laptop : Item = {
    itemName : "laptop",
    requiredSpace : 10,
    compatiblePlacement : [ ZIP_TYPES.mainZip]
}



const backpack1 = new BackpackClass(3,15,[ZIP_TYPES.frontPocket , ZIP_TYPES.mainZip , ZIP_TYPES.sideMiniZip])

console.log(backpack1.getBackpackInfo())
backpack1.addItem(pen,ZIP_TYPES.sideMiniZip)
console.log(backpack1.getBackpackInfo())
console.log(backpack1.isZipOccupied(ZIP_TYPES.sideMiniZip))
backpack1.removeItem(ZIP_TYPES.sideMiniZip)
console.log(backpack1.getBackpackInfo())