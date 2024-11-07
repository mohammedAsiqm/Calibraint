var ZIP_TYPES;
(function (ZIP_TYPES) {
    ZIP_TYPES["mainZip"] = "mainZip";
    ZIP_TYPES["frontPocket"] = "frontPocket";
    ZIP_TYPES["sideMiniZip"] = "sideMiniZip";
})(ZIP_TYPES || (ZIP_TYPES = {}));
var BackpackClass = /** @class */ (function () {
    function BackpackClass(totalContainer, totalStorageCapacity, zips) {
        this.totalContainer = 0;
        this.storageCapacity = {
            total: 0,
            remaining: 0
        };
        this.waterBottle = null;
        this.totalContainer = totalContainer;
        this.storageCapacity.total = totalStorageCapacity;
        this.storageCapacity.remaining = totalStorageCapacity;
        this.zips = zips.map(function (i) { return ({ zipType: i, isOccupied: false, occupiedBy: null }); });
    }
    BackpackClass.prototype.getBackpackInfo = function () {
        return {
            totalContainer: this.totalContainer,
            storageCapacity: this.storageCapacity,
            zips: this.zips,
            waterBottle: this.waterBottle
        };
    };
    BackpackClass.prototype.addItem = function (itemObject, zip) {
        if (!itemObject.compatiblePlacement.includes(zip))
            throw new Error("Item compatiblePlacement is not matched with zip");
        var backpackZip = this.zips.find(function (item) { return item.zipType === zip; });
        if (!backpackZip)
            throw new Error("Backpack ziptype not found");
        if (backpackZip.isOccupied)
            throw new Error("Backpack Occupied");
        if (this.storageCapacity.remaining < itemObject.requiredSpace)
            throw new Error("No space in backpack");
        backpackZip.isOccupied = true,
            backpackZip.occupiedBy = itemObject,
            this.storageCapacity.remaining -= itemObject.requiredSpace;
    };
    BackpackClass.prototype.removeItem = function (zipType) {
        var _a, _b;
        var zip = this.zips.find(function (item) { return item.zipType === zipType; });
        if (!zip)
            throw new Error("Ziptype not found");
        if ((_a = zip.occupiedBy) === null || _a === void 0 ? void 0 : _a.requiredSpace) {
            this.storageCapacity.remaining += (_b = zip.occupiedBy) === null || _b === void 0 ? void 0 : _b.requiredSpace;
        }
        zip.isOccupied = false;
        zip.occupiedBy = null;
    };
    BackpackClass.prototype.isZipOccupied = function (zipType) {
        var item = this.zips.find(function (item) { return item.zipType === zipType; });
        if (!item) {
            throw new Error("Ziptype not found");
        }
        return item.isOccupied;
    };
    return BackpackClass;
}());
var pen = {
    itemName: "Pen",
    requiredSpace: 1,
    compatiblePlacement: [ZIP_TYPES.frontPocket, ZIP_TYPES.sideMiniZip]
};
var laptop = {
    itemName: "laptop",
    requiredSpace: 10,
    compatiblePlacement: [ZIP_TYPES.mainZip]
};
var backpack1 = new BackpackClass(3, 15, [ZIP_TYPES.frontPocket, ZIP_TYPES.mainZip, ZIP_TYPES.sideMiniZip]);
console.log(backpack1.getBackpackInfo());
backpack1.addItem(pen, ZIP_TYPES.sideMiniZip);
console.log(backpack1.getBackpackInfo());
console.log(backpack1.isZipOccupied(ZIP_TYPES.sideMiniZip));
backpack1.removeItem(ZIP_TYPES.sideMiniZip);
console.log(backpack1.getBackpackInfo());
