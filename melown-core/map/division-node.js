/**
 * @constructor
 */
Melown.MapDivisionNode = function(map_, id_, srs_, extents_, heightRange_, partitioning_) {
    this.map_ = map_;
    this.id_ = id_;
    this.srs_ = this.map_.getMapsSrs(srs_);
    this.extents_ = extents_;
    this.heightRange_ =  heightRange_;
    this.partitioning_ = partitioning_;
};

Melown.MapDivisionNode.prototype.getInnerCoords = function (coords_) {
    return this.srs_.convertCoordsFrom(coords_, this.map_.getNavigationSrs());
};

Melown.MapDivisionNode.prototype.getExtents = function (coords_) {
    return this.srs_.convertCoordsFrom(coords_, this.map_.getNavigationSrs());
};

