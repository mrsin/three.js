/**
 * @author szimek / https://github.com/szimek/
 */

THREE.RenderTarget = function ( width, height, options ) {

	this.width = width;
	this.height = height;

	options = options || {};

	this.wrapS = options.wrapS !== undefined ? options.wrapS : THREE.ClampToEdgeWrapping;
	this.wrapT = options.wrapT !== undefined ? options.wrapT : THREE.ClampToEdgeWrapping;

	this.magFilter = options.magFilter !== undefined ? options.magFilter : THREE.LinearFilter;
	this.minFilter = options.minFilter !== undefined ? options.minFilter : THREE.LinearMipMapLinearFilter;

	this.format = options.format !== undefined ? options.format : THREE.RGBFormat;
	this.type = options.type !== undefined ? options.type : THREE.UnsignedByteType;

};
