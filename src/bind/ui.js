Module['ui'] = Module['ui'] || {};
Module['stl'] = Module['stl'] || {};
// CanvasConnect
function CanvasConnect() {
    this.__ptr = _mud_CanvasConnect__construct_0(); this.__type = CanvasConnect.__type; getCache(CanvasConnect)[this.__ptr] = this;
};
CanvasConnect.prototype = Object.create(WrapperObject.prototype);
CanvasConnect.prototype.constructor = CanvasConnect;
CanvasConnect.prototype.__class = CanvasConnect;
CanvasConnect.__cache = {};
Module['CanvasConnect'] = CanvasConnect;
CanvasConnect.prototype["__destroy"] = CanvasConnect.prototype.__destroy = function() {
    _mud_CanvasConnect__destroy(this.__ptr);
};
// Clipboard
function Clipboard() {
    this.__ptr = _mud_Clipboard__construct_0(); this.__type = Clipboard.__type; getCache(Clipboard)[this.__ptr] = this;
};
Clipboard.prototype = Object.create(WrapperObject.prototype);
Clipboard.prototype.constructor = Clipboard;
Clipboard.prototype.__class = Clipboard;
Clipboard.__cache = {};
Module['Clipboard'] = Clipboard;
Object.defineProperty(Clipboard.prototype, "text", {
    get: function() {
        return Pointer_stringify(_mud_Clipboard__get_text(this.__ptr));
    },
    set: function(value) {
        _mud_Clipboard__set_text(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(Clipboard.prototype, "line_mode", {
    get: function() {
        return !!(_mud_Clipboard__get_line_mode(this.__ptr));
    },
    set: function(value) {
        _mud_Clipboard__set_line_mode(this.__ptr, value);
    }
});
Clipboard.prototype["__destroy"] = Clipboard.prototype.__destroy = function() {
    _mud_Clipboard__destroy(this.__ptr);
};
// Dock
function Dock() {
    this.__ptr = _mud_Dock__construct_0(); this.__type = Dock.__type; getCache(Dock)[this.__ptr] = this;
};
Dock.prototype = Object.create(WrapperObject.prototype);
Dock.prototype.constructor = Dock;
Dock.prototype.__class = Dock;
Dock.__cache = {};
Module['Dock'] = Dock;
Dock.prototype["__destroy"] = Dock.prototype.__destroy = function() {
    _mud_Dock__destroy(this.__ptr);
};
// Docksystem
function Docksystem() { throw "cannot construct a Docksystem, no constructor in IDL" }
Docksystem.prototype = Object.create(WrapperObject.prototype);
Docksystem.prototype.constructor = Docksystem;
Docksystem.prototype.__class = Docksystem;
Docksystem.__cache = {};
Module['Docksystem'] = Docksystem;
Docksystem.prototype["__destroy"] = Docksystem.prototype.__destroy = function() {
    _mud_Docksystem__destroy(this.__ptr);
};
// Gradient
function Gradient() {
    this.__ptr = _mud_Gradient__construct_0(); this.__type = Gradient.__type; getCache(Gradient)[this.__ptr] = this;
};
Gradient.prototype = Object.create(WrapperObject.prototype);
Gradient.prototype.constructor = Gradient;
Gradient.prototype.__class = Gradient;
Gradient.__cache = {};
Module['Gradient'] = Gradient;
Object.defineProperty(Gradient.prototype, "start", {
    get: function() {
        return wrapPointer(_mud_Gradient__get_start(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_Gradient__set_start(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Gradient.prototype, "end", {
    get: function() {
        return wrapPointer(_mud_Gradient__get_end(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_Gradient__set_end(this.__ptr, value.__ptr);
    }
});
Gradient.prototype["__destroy"] = Gradient.prototype.__destroy = function() {
    _mud_Gradient__destroy(this.__ptr);
};
// GridSolver
function GridSolver() { throw "cannot construct a GridSolver, no constructor in IDL" }
GridSolver.prototype = Object.create(WrapperObject.prototype);
GridSolver.prototype.constructor = GridSolver;
GridSolver.prototype.__class = GridSolver;
GridSolver.__cache = {};
Module['GridSolver'] = GridSolver;
GridSolver.prototype["__destroy"] = GridSolver.prototype.__destroy = function() {
    _mud_GridSolver__destroy(this.__ptr);
};
// ImageSkin
function ImageSkin(a0, a1, a2, a3, a4, a5, a6) {
    if (a5 === undefined) { this.__ptr = _mud_ImageSkin__construct_5(/*image*/a0.__ptr, /*left*/a1, /*top*/a2, /*right*/a3, /*bottom*/a4); this.__type = ImageSkin.__type; getCache(ImageSkin)[this.__ptr] = this; return; }
    if (a6 === undefined) { this.__ptr = _mud_ImageSkin__construct_6(/*image*/a0.__ptr, /*left*/a1, /*top*/a2, /*right*/a3, /*bottom*/a4, /*margin*/a5); this.__type = ImageSkin.__type; getCache(ImageSkin)[this.__ptr] = this; return; }
    this.__ptr = _mud_ImageSkin__construct_7(/*image*/a0.__ptr, /*left*/a1, /*top*/a2, /*right*/a3, /*bottom*/a4, /*margin*/a5, /*stretch*/a6); this.__type = ImageSkin.__type; getCache(ImageSkin)[this.__ptr] = this;
};
ImageSkin.prototype = Object.create(WrapperObject.prototype);
ImageSkin.prototype.constructor = ImageSkin;
ImageSkin.prototype.__class = ImageSkin;
ImageSkin.__cache = {};
Module['ImageSkin'] = ImageSkin;
Object.defineProperty(ImageSkin.prototype, "d_image", {
    get: function() {
        return wrapPointer(_mud_ImageSkin__get_d_image(this.__ptr), Image);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_image(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(ImageSkin.prototype, "d_left", {
    get: function() {
        return _mud_ImageSkin__get_d_left(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_left(this.__ptr, value);
    }
});
Object.defineProperty(ImageSkin.prototype, "d_top", {
    get: function() {
        return _mud_ImageSkin__get_d_top(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_top(this.__ptr, value);
    }
});
Object.defineProperty(ImageSkin.prototype, "d_right", {
    get: function() {
        return _mud_ImageSkin__get_d_right(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_right(this.__ptr, value);
    }
});
Object.defineProperty(ImageSkin.prototype, "d_bottom", {
    get: function() {
        return _mud_ImageSkin__get_d_bottom(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_bottom(this.__ptr, value);
    }
});
Object.defineProperty(ImageSkin.prototype, "margin", {
    get: function() {
        return _mud_ImageSkin__get_margin(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_margin(this.__ptr, value);
    }
});
Object.defineProperty(ImageSkin.prototype, "d_stretch", {
    get: function() {
        return _mud_ImageSkin__get_d_stretch(this.__ptr);
    },
    set: function(value) {
        _mud_ImageSkin__set_d_stretch(this.__ptr, value);
    }
});
ImageSkin.prototype["__destroy"] = ImageSkin.prototype.__destroy = function() {
    _mud_ImageSkin__destroy(this.__ptr);
};
// InkStyle
function InkStyle(a0) {
    ensureCache.prepare();
    if (a0 === undefined) { this.__ptr = _mud_InkStyle__construct_0(); this.__type = InkStyle.__type; getCache(InkStyle)[this.__ptr] = this; return; }
    this.__ptr = _mud_InkStyle__construct_1(ensureString(/*name*/a0)); this.__type = InkStyle.__type; getCache(InkStyle)[this.__ptr] = this;
};
InkStyle.prototype = Object.create(WrapperObject.prototype);
InkStyle.prototype.constructor = InkStyle;
InkStyle.prototype.__class = InkStyle;
InkStyle.__cache = {};
Module['InkStyle'] = InkStyle;
Object.defineProperty(InkStyle.prototype, "name", {
    get: function() {
        return Pointer_stringify(_mud_InkStyle__get_name(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_name(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(InkStyle.prototype, "empty", {
    get: function() {
        return !!(_mud_InkStyle__get_empty(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_empty(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "background_colour", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_background_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_InkStyle__set_background_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "border_colour", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_border_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_InkStyle__set_border_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "image_colour", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_image_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_InkStyle__set_image_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "text_colour", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_text_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_InkStyle__set_text_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "text_font", {
    get: function() {
        return Pointer_stringify(_mud_InkStyle__get_text_font(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_text_font(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(InkStyle.prototype, "text_size", {
    get: function() {
        return _mud_InkStyle__get_text_size(this.__ptr);
    },
    set: function(value) {
        _mud_InkStyle__set_text_size(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "text_break", {
    get: function() {
        return !!(_mud_InkStyle__get_text_break(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_text_break(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "text_wrap", {
    get: function() {
        return !!(_mud_InkStyle__get_text_wrap(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_text_wrap(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "border_width", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_border_width(this.__ptr), v4_float);
    },
    set: function(value) {
        _mud_InkStyle__set_border_width(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "corner_radius", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_corner_radius(this.__ptr), v4_float);
    },
    set: function(value) {
        _mud_InkStyle__set_corner_radius(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "weak_corners", {
    get: function() {
        return !!(_mud_InkStyle__get_weak_corners(this.__ptr));
    },
    set: function(value) {
        _mud_InkStyle__set_weak_corners(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "padding", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_padding(this.__ptr), v4_float);
    },
    set: function(value) {
        _mud_InkStyle__set_padding(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "margin", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_margin(this.__ptr), v4_float);
    },
    set: function(value) {
        _mud_InkStyle__set_margin(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "align", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_align(this.__ptr), v2_mud_Align);
    },
    set: function(value) {
        _mud_InkStyle__set_align(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "linear_gradient", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_linear_gradient(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_InkStyle__set_linear_gradient(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "linear_gradient_dim", {
    get: function() {
        return _mud_InkStyle__get_linear_gradient_dim(this.__ptr);
    },
    set: function(value) {
        _mud_InkStyle__set_linear_gradient_dim(this.__ptr, value);
    }
});
Object.defineProperty(InkStyle.prototype, "stretch", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_stretch(this.__ptr), v2_bool);
    },
    set: function(value) {
        _mud_InkStyle__set_stretch(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "image", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_image(this.__ptr), Image);
    },
    set: function(value) {
        _mud_InkStyle__set_image(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "overlay", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_overlay(this.__ptr), Image);
    },
    set: function(value) {
        _mud_InkStyle__set_overlay(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "tile", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_tile(this.__ptr), Image);
    },
    set: function(value) {
        _mud_InkStyle__set_tile(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "image_skin", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_image_skin(this.__ptr), ImageSkin);
    },
    set: function(value) {
        _mud_InkStyle__set_image_skin(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "shadow", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_shadow(this.__ptr), Shadow);
    },
    set: function(value) {
        _mud_InkStyle__set_shadow(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "shadow_colour", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_shadow_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_InkStyle__set_shadow_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(InkStyle.prototype, "hover_cursor", {
    get: function() {
        return wrapPointer(_mud_InkStyle__get_hover_cursor(this.__ptr), Style);
    },
    set: function(value) {
        _mud_InkStyle__set_hover_cursor(this.__ptr, value.__ptr);
    }
});
InkStyle.prototype["__destroy"] = InkStyle.prototype.__destroy = function() {
    _mud_InkStyle__destroy(this.__ptr);
};
// Layer
function Layer() { throw "cannot construct a Layer, no constructor in IDL" }
Layer.prototype = Object.create(WrapperObject.prototype);
Layer.prototype.constructor = Layer;
Layer.prototype.__class = Layer;
Layer.__cache = {};
Module['Layer'] = Layer;
Layer.prototype["__destroy"] = Layer.prototype.__destroy = function() {
    _mud_Layer__destroy(this.__ptr);
};
// Layout
function Layout(a0) {
    ensureCache.prepare();
    if (a0 === undefined) { this.__ptr = _mud_Layout__construct_0(); this.__type = Layout.__type; getCache(Layout)[this.__ptr] = this; return; }
    this.__ptr = _mud_Layout__construct_1(ensureString(/*name*/a0)); this.__type = Layout.__type; getCache(Layout)[this.__ptr] = this;
};
Layout.prototype = Object.create(WrapperObject.prototype);
Layout.prototype.constructor = Layout;
Layout.prototype.__class = Layout;
Layout.__cache = {};
Module['Layout'] = Layout;
Object.defineProperty(Layout.prototype, "name", {
    get: function() {
        return Pointer_stringify(_mud_Layout__get_name(this.__ptr));
    },
    set: function(value) {
        _mud_Layout__set_name(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(Layout.prototype, "solver", {
    get: function() {
        return _mud_Layout__get_solver(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_solver(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "layout", {
    get: function() {
        return wrapPointer(_mud_Layout__get_layout(this.__ptr), v2_mud_AutoLayout);
    },
    set: function(value) {
        _mud_Layout__set_layout(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "flow", {
    get: function() {
        return _mud_Layout__get_flow(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_flow(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "space", {
    get: function() {
        return wrapPointer(_mud_Layout__get_space(this.__ptr), Space);
    },
    set: function(value) {
        _mud_Layout__set_space(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "clipping", {
    get: function() {
        return _mud_Layout__get_clipping(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_clipping(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "opacity", {
    get: function() {
        return _mud_Layout__get_opacity(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_opacity(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "align", {
    get: function() {
        return wrapPointer(_mud_Layout__get_align(this.__ptr), v2_mud_Align);
    },
    set: function(value) {
        _mud_Layout__set_align(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "span", {
    get: function() {
        return wrapPointer(_mud_Layout__get_span(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_Layout__set_span(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "size", {
    get: function() {
        return wrapPointer(_mud_Layout__get_size(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_Layout__set_size(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "padding", {
    get: function() {
        return wrapPointer(_mud_Layout__get_padding(this.__ptr), v4_float);
    },
    set: function(value) {
        _mud_Layout__set_padding(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "margin", {
    get: function() {
        return wrapPointer(_mud_Layout__get_margin(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_Layout__set_margin(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "spacing", {
    get: function() {
        return wrapPointer(_mud_Layout__get_spacing(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_Layout__set_spacing(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "pivot", {
    get: function() {
        return wrapPointer(_mud_Layout__get_pivot(this.__ptr), v2_mud_Pivot);
    },
    set: function(value) {
        _mud_Layout__set_pivot(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Layout.prototype, "zorder", {
    get: function() {
        return _mud_Layout__get_zorder(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_zorder(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "no_grid", {
    get: function() {
        return !!(_mud_Layout__get_no_grid(this.__ptr));
    },
    set: function(value) {
        _mud_Layout__set_no_grid(this.__ptr, value);
    }
});
Object.defineProperty(Layout.prototype, "table_division", {
    get: function() {
        return _mud_Layout__get_table_division(this.__ptr);
    }});
Object.defineProperty(Layout.prototype, "updated", {
    get: function() {
        return _mud_Layout__get_updated(this.__ptr);
    },
    set: function(value) {
        _mud_Layout__set_updated(this.__ptr, value);
    }
});
Layout.prototype["__destroy"] = Layout.prototype.__destroy = function() {
    _mud_Layout__destroy(this.__ptr);
};
// NodeConnection
function NodeConnection() {
    this.__ptr = _mud_NodeConnection__construct_0(); this.__type = NodeConnection.__type; getCache(NodeConnection)[this.__ptr] = this;
};
NodeConnection.prototype = Object.create(WrapperObject.prototype);
NodeConnection.prototype.constructor = NodeConnection;
NodeConnection.prototype.__class = NodeConnection;
NodeConnection.__cache = {};
Module['NodeConnection'] = NodeConnection;
NodeConnection.prototype["__destroy"] = NodeConnection.prototype.__destroy = function() {
    _mud_NodeConnection__destroy(this.__ptr);
};
// Paint
function Paint() {
    this.__ptr = _mud_Paint__construct_0(); this.__type = Paint.__type; getCache(Paint)[this.__ptr] = this;
};
Paint.prototype = Object.create(WrapperObject.prototype);
Paint.prototype.constructor = Paint;
Paint.prototype.__class = Paint;
Paint.__cache = {};
Module['Paint'] = Paint;
Object.defineProperty(Paint.prototype, "fill_colour", {
    get: function() {
        return wrapPointer(_mud_Paint__get_fill_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_Paint__set_fill_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Paint.prototype, "stroke_colour", {
    get: function() {
        return wrapPointer(_mud_Paint__get_stroke_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_Paint__set_stroke_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Paint.prototype, "stroke_width", {
    get: function() {
        return _mud_Paint__get_stroke_width(this.__ptr);
    },
    set: function(value) {
        _mud_Paint__set_stroke_width(this.__ptr, value);
    }
});
Paint.prototype["__destroy"] = Paint.prototype.__destroy = function() {
    _mud_Paint__destroy(this.__ptr);
};
// Shadow
function Shadow(a0, a1, a2, a3, a4) {
    if (a0 === undefined) { this.__ptr = _mud_Shadow__construct_0(); this.__type = Shadow.__type; getCache(Shadow)[this.__ptr] = this; return; }
    if (a4 === undefined) { this.__ptr = _mud_Shadow__construct_4(/*xpos*/a0, /*ypos*/a1, /*blur*/a2, /*spread*/a3); this.__type = Shadow.__type; getCache(Shadow)[this.__ptr] = this; return; }
    this.__ptr = _mud_Shadow__construct_5(/*xpos*/a0, /*ypos*/a1, /*blur*/a2, /*spread*/a3, /*colour*/a4.__ptr); this.__type = Shadow.__type; getCache(Shadow)[this.__ptr] = this;
};
Shadow.prototype = Object.create(WrapperObject.prototype);
Shadow.prototype.constructor = Shadow;
Shadow.prototype.__class = Shadow;
Shadow.__cache = {};
Module['Shadow'] = Shadow;
Object.defineProperty(Shadow.prototype, "d_xpos", {
    get: function() {
        return _mud_Shadow__get_d_xpos(this.__ptr);
    },
    set: function(value) {
        _mud_Shadow__set_d_xpos(this.__ptr, value);
    }
});
Object.defineProperty(Shadow.prototype, "d_ypos", {
    get: function() {
        return _mud_Shadow__get_d_ypos(this.__ptr);
    },
    set: function(value) {
        _mud_Shadow__set_d_ypos(this.__ptr, value);
    }
});
Object.defineProperty(Shadow.prototype, "d_blur", {
    get: function() {
        return _mud_Shadow__get_d_blur(this.__ptr);
    },
    set: function(value) {
        _mud_Shadow__set_d_blur(this.__ptr, value);
    }
});
Object.defineProperty(Shadow.prototype, "d_spread", {
    get: function() {
        return _mud_Shadow__get_d_spread(this.__ptr);
    },
    set: function(value) {
        _mud_Shadow__set_d_spread(this.__ptr, value);
    }
});
Object.defineProperty(Shadow.prototype, "d_colour", {
    get: function() {
        return wrapPointer(_mud_Shadow__get_d_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_Shadow__set_d_colour(this.__ptr, value.__ptr);
    }
});
Shadow.prototype["__destroy"] = Shadow.prototype.__destroy = function() {
    _mud_Shadow__destroy(this.__ptr);
};
// Space
function Space() {
    this.__ptr = _mud_Space__construct_0(); this.__type = Space.__type; getCache(Space)[this.__ptr] = this;
};
Space.prototype = Object.create(WrapperObject.prototype);
Space.prototype.constructor = Space;
Space.prototype.__class = Space;
Space.__cache = {};
Module['Space'] = Space;
Object.defineProperty(Space.prototype, "direction", {
    get: function() {
        return _mud_Space__get_direction(this.__ptr);
    },
    set: function(value) {
        _mud_Space__set_direction(this.__ptr, value);
    }
});
Object.defineProperty(Space.prototype, "sizingLength", {
    get: function() {
        return _mud_Space__get_sizingLength(this.__ptr);
    },
    set: function(value) {
        _mud_Space__set_sizingLength(this.__ptr, value);
    }
});
Object.defineProperty(Space.prototype, "sizingDepth", {
    get: function() {
        return _mud_Space__get_sizingDepth(this.__ptr);
    },
    set: function(value) {
        _mud_Space__set_sizingDepth(this.__ptr, value);
    }
});
Space.prototype["__destroy"] = Space.prototype.__destroy = function() {
    _mud_Space__destroy(this.__ptr);
};
// Style
function Style() { throw "cannot construct a Style, no constructor in IDL" }
Style.prototype = Object.create(WrapperObject.prototype);
Style.prototype.constructor = Style;
Style.prototype.__class = Style;
Style.__cache = {};
Module['Style'] = Style;
Object.defineProperty(Style.prototype, "base", {
    get: function() {
        return wrapPointer(_mud_Style__get_base(this.__ptr), Style);
    },
    set: function(value) {
        _mud_Style__set_base(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(Style.prototype, "name", {
    get: function() {
        return Pointer_stringify(_mud_Style__get_name(this.__ptr));
    }});
Object.defineProperty(Style.prototype, "layout", {
    get: function() {
        return wrapPointer(_mud_Style__get_layout(this.__ptr), Layout);
    }});
Object.defineProperty(Style.prototype, "skin", {
    get: function() {
        return wrapPointer(_mud_Style__get_skin(this.__ptr), InkStyle);
    }});
Style.prototype["__destroy"] = Style.prototype.__destroy = function() {
    _mud_Style__destroy(this.__ptr);
};
// TableSolver
function TableSolver() { throw "cannot construct a TableSolver, no constructor in IDL" }
TableSolver.prototype = Object.create(WrapperObject.prototype);
TableSolver.prototype.constructor = TableSolver;
TableSolver.prototype.__class = TableSolver;
TableSolver.__cache = {};
Module['TableSolver'] = TableSolver;
TableSolver.prototype["__destroy"] = TableSolver.prototype.__destroy = function() {
    _mud_TableSolver__destroy(this.__ptr);
};
// Text
function Text() { throw "cannot construct a Text, no constructor in IDL" }
Text.prototype = Object.create(WrapperObject.prototype);
Text.prototype.constructor = Text;
Text.prototype.__class = Text;
Text.__cache = {};
Module['Text'] = Text;
Text.prototype["__destroy"] = Text.prototype.__destroy = function() {
    _mud_Text__destroy(this.__ptr);
};
// TextCursor
function TextCursor() {
    this.__ptr = _mud_TextCursor__construct_0(); this.__type = TextCursor.__type; getCache(TextCursor)[this.__ptr] = this;
};
TextCursor.prototype = Object.create(WrapperObject.prototype);
TextCursor.prototype.constructor = TextCursor;
TextCursor.prototype.__class = TextCursor;
TextCursor.__cache = {};
Module['TextCursor'] = TextCursor;
TextCursor.prototype["__destroy"] = TextCursor.prototype.__destroy = function() {
    _mud_TextCursor__destroy(this.__ptr);
};
// TextMarker
function TextMarker() {
    this.__ptr = _mud_TextMarker__construct_0(); this.__type = TextMarker.__type; getCache(TextMarker)[this.__ptr] = this;
};
TextMarker.prototype = Object.create(WrapperObject.prototype);
TextMarker.prototype.constructor = TextMarker;
TextMarker.prototype.__class = TextMarker;
TextMarker.__cache = {};
Module['TextMarker'] = TextMarker;
TextMarker.prototype["__destroy"] = TextMarker.prototype.__destroy = function() {
    _mud_TextMarker__destroy(this.__ptr);
};
// TextPaint
function TextPaint() {
    this.__ptr = _mud_TextPaint__construct_0(); this.__type = TextPaint.__type; getCache(TextPaint)[this.__ptr] = this;
};
TextPaint.prototype = Object.create(WrapperObject.prototype);
TextPaint.prototype.constructor = TextPaint;
TextPaint.prototype.__class = TextPaint;
TextPaint.__cache = {};
Module['TextPaint'] = TextPaint;
Object.defineProperty(TextPaint.prototype, "font", {
    get: function() {
        return Pointer_stringify(_mud_TextPaint__get_font(this.__ptr));
    },
    set: function(value) {
        _mud_TextPaint__set_font(this.__ptr, ensureString(value));
    }
});
Object.defineProperty(TextPaint.prototype, "colour", {
    get: function() {
        return wrapPointer(_mud_TextPaint__get_colour(this.__ptr), Colour);
    },
    set: function(value) {
        _mud_TextPaint__set_colour(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(TextPaint.prototype, "size", {
    get: function() {
        return _mud_TextPaint__get_size(this.__ptr);
    },
    set: function(value) {
        _mud_TextPaint__set_size(this.__ptr, value);
    }
});
Object.defineProperty(TextPaint.prototype, "align", {
    get: function() {
        return wrapPointer(_mud_TextPaint__get_align(this.__ptr), v2_mud_Align);
    },
    set: function(value) {
        _mud_TextPaint__set_align(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(TextPaint.prototype, "text_break", {
    get: function() {
        return !!(_mud_TextPaint__get_text_break(this.__ptr));
    },
    set: function(value) {
        _mud_TextPaint__set_text_break(this.__ptr, value);
    }
});
Object.defineProperty(TextPaint.prototype, "text_wrap", {
    get: function() {
        return !!(_mud_TextPaint__get_text_wrap(this.__ptr));
    },
    set: function(value) {
        _mud_TextPaint__set_text_wrap(this.__ptr, value);
    }
});
TextPaint.prototype["__destroy"] = TextPaint.prototype.__destroy = function() {
    _mud_TextPaint__destroy(this.__ptr);
};
// TextSelection
function TextSelection() {
    this.__ptr = _mud_TextSelection__construct_0(); this.__type = TextSelection.__type; getCache(TextSelection)[this.__ptr] = this;
};
TextSelection.prototype = Object.create(WrapperObject.prototype);
TextSelection.prototype.constructor = TextSelection;
TextSelection.prototype.__class = TextSelection;
TextSelection.__cache = {};
Module['TextSelection'] = TextSelection;
TextSelection.prototype["__destroy"] = TextSelection.prototype.__destroy = function() {
    _mud_TextSelection__destroy(this.__ptr);
};
// UiRect
function UiRect() {
    this.__ptr = _mud_UiRect__construct_0(); this.__type = UiRect.__type; getCache(UiRect)[this.__ptr] = this;
};
UiRect.prototype = Object.create(WrapperObject.prototype);
UiRect.prototype.constructor = UiRect;
UiRect.prototype.__class = UiRect;
UiRect.__cache = {};
Module['UiRect'] = UiRect;
Object.defineProperty(UiRect.prototype, "position", {
    get: function() {
        return wrapPointer(_mud_UiRect__get_position(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_UiRect__set_position(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(UiRect.prototype, "size", {
    get: function() {
        return wrapPointer(_mud_UiRect__get_size(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_UiRect__set_size(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(UiRect.prototype, "content", {
    get: function() {
        return wrapPointer(_mud_UiRect__get_content(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_UiRect__set_content(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(UiRect.prototype, "span", {
    get: function() {
        return wrapPointer(_mud_UiRect__get_span(this.__ptr), v2_float);
    },
    set: function(value) {
        _mud_UiRect__set_span(this.__ptr, value.__ptr);
    }
});
Object.defineProperty(UiRect.prototype, "scale", {
    get: function() {
        return _mud_UiRect__get_scale(this.__ptr);
    },
    set: function(value) {
        _mud_UiRect__set_scale(this.__ptr, value);
    }
});
UiRect.prototype["__destroy"] = UiRect.prototype.__destroy = function() {
    _mud_UiRect__destroy(this.__ptr);
};
// UiWindow
function UiWindow() { throw "cannot construct a UiWindow, no constructor in IDL" }
UiWindow.prototype = Object.create(WrapperObject.prototype);
UiWindow.prototype.constructor = UiWindow;
UiWindow.prototype.__class = UiWindow;
UiWindow.__cache = {};
Module['UiWindow'] = UiWindow;
UiWindow.prototype["__destroy"] = UiWindow.prototype.__destroy = function() {
    _mud_UiWindow__destroy(this.__ptr);
};
// User
function User() { throw "cannot construct a User, no constructor in IDL" }
User.prototype = Object.create(WrapperObject.prototype);
User.prototype.constructor = User;
User.prototype.__class = User;
User.__cache = {};
Module['User'] = User;
User.prototype["__destroy"] = User.prototype.__destroy = function() {
    _mud_User__destroy(this.__ptr);
};
// Vg
function Vg() { throw "cannot construct a Vg, no constructor in IDL" }
Vg.prototype = Object.create(WrapperObject.prototype);
Vg.prototype.constructor = Vg;
Vg.prototype.__class = Vg;
Vg.__cache = {};
Module['Vg'] = Vg;
Vg.prototype["__destroy"] = Vg.prototype.__destroy = function() {
    _mud_Vg__destroy(this.__ptr);
};
// v2<mud::Align>
function v2_mud_Align(a0, a1) {
    if (a0 === undefined) { this.__ptr = _mud_v2_mud_Align__construct_0(); this.__type = v2_mud_Align.__type; getCache(v2_mud_Align)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _mud_v2_mud_Align__construct_1(/*v*/a0); this.__type = v2_mud_Align.__type; getCache(v2_mud_Align)[this.__ptr] = this; return; }
    this.__ptr = _mud_v2_mud_Align__construct_2(/*x*/a0, /*y*/a1); this.__type = v2_mud_Align.__type; getCache(v2_mud_Align)[this.__ptr] = this;
};
v2_mud_Align.prototype = Object.create(WrapperObject.prototype);
v2_mud_Align.prototype.constructor = v2_mud_Align;
v2_mud_Align.prototype.__class = v2_mud_Align;
v2_mud_Align.__cache = {};
Module['v2_mud_Align'] = v2_mud_Align;
Object.defineProperty(v2_mud_Align.prototype, "x", {
    get: function() {
        return _mud_v2_mud_Align__get_x(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Align__set_x(this.__ptr, value);
    }
});
Object.defineProperty(v2_mud_Align.prototype, "y", {
    get: function() {
        return _mud_v2_mud_Align__get_y(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Align__set_y(this.__ptr, value);
    }
});
v2_mud_Align.prototype["__destroy"] = v2_mud_Align.prototype.__destroy = function() {
    _mud_v2_mud_Align__destroy(this.__ptr);
};
// v2<mud::AutoLayout>
function v2_mud_AutoLayout(a0, a1) {
    if (a0 === undefined) { this.__ptr = _mud_v2_mud_AutoLayout__construct_0(); this.__type = v2_mud_AutoLayout.__type; getCache(v2_mud_AutoLayout)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _mud_v2_mud_AutoLayout__construct_1(/*v*/a0); this.__type = v2_mud_AutoLayout.__type; getCache(v2_mud_AutoLayout)[this.__ptr] = this; return; }
    this.__ptr = _mud_v2_mud_AutoLayout__construct_2(/*x*/a0, /*y*/a1); this.__type = v2_mud_AutoLayout.__type; getCache(v2_mud_AutoLayout)[this.__ptr] = this;
};
v2_mud_AutoLayout.prototype = Object.create(WrapperObject.prototype);
v2_mud_AutoLayout.prototype.constructor = v2_mud_AutoLayout;
v2_mud_AutoLayout.prototype.__class = v2_mud_AutoLayout;
v2_mud_AutoLayout.__cache = {};
Module['v2_mud_AutoLayout'] = v2_mud_AutoLayout;
Object.defineProperty(v2_mud_AutoLayout.prototype, "x", {
    get: function() {
        return _mud_v2_mud_AutoLayout__get_x(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_AutoLayout__set_x(this.__ptr, value);
    }
});
Object.defineProperty(v2_mud_AutoLayout.prototype, "y", {
    get: function() {
        return _mud_v2_mud_AutoLayout__get_y(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_AutoLayout__set_y(this.__ptr, value);
    }
});
v2_mud_AutoLayout.prototype["__destroy"] = v2_mud_AutoLayout.prototype.__destroy = function() {
    _mud_v2_mud_AutoLayout__destroy(this.__ptr);
};
// v2<mud::Pivot>
function v2_mud_Pivot(a0, a1) {
    if (a0 === undefined) { this.__ptr = _mud_v2_mud_Pivot__construct_0(); this.__type = v2_mud_Pivot.__type; getCache(v2_mud_Pivot)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _mud_v2_mud_Pivot__construct_1(/*v*/a0); this.__type = v2_mud_Pivot.__type; getCache(v2_mud_Pivot)[this.__ptr] = this; return; }
    this.__ptr = _mud_v2_mud_Pivot__construct_2(/*x*/a0, /*y*/a1); this.__type = v2_mud_Pivot.__type; getCache(v2_mud_Pivot)[this.__ptr] = this;
};
v2_mud_Pivot.prototype = Object.create(WrapperObject.prototype);
v2_mud_Pivot.prototype.constructor = v2_mud_Pivot;
v2_mud_Pivot.prototype.__class = v2_mud_Pivot;
v2_mud_Pivot.__cache = {};
Module['v2_mud_Pivot'] = v2_mud_Pivot;
Object.defineProperty(v2_mud_Pivot.prototype, "x", {
    get: function() {
        return _mud_v2_mud_Pivot__get_x(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Pivot__set_x(this.__ptr, value);
    }
});
Object.defineProperty(v2_mud_Pivot.prototype, "y", {
    get: function() {
        return _mud_v2_mud_Pivot__get_y(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Pivot__set_y(this.__ptr, value);
    }
});
v2_mud_Pivot.prototype["__destroy"] = v2_mud_Pivot.prototype.__destroy = function() {
    _mud_v2_mud_Pivot__destroy(this.__ptr);
};
// v2<mud::Sizing>
function v2_mud_Sizing(a0, a1) {
    if (a0 === undefined) { this.__ptr = _mud_v2_mud_Sizing__construct_0(); this.__type = v2_mud_Sizing.__type; getCache(v2_mud_Sizing)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _mud_v2_mud_Sizing__construct_1(/*v*/a0); this.__type = v2_mud_Sizing.__type; getCache(v2_mud_Sizing)[this.__ptr] = this; return; }
    this.__ptr = _mud_v2_mud_Sizing__construct_2(/*x*/a0, /*y*/a1); this.__type = v2_mud_Sizing.__type; getCache(v2_mud_Sizing)[this.__ptr] = this;
};
v2_mud_Sizing.prototype = Object.create(WrapperObject.prototype);
v2_mud_Sizing.prototype.constructor = v2_mud_Sizing;
v2_mud_Sizing.prototype.__class = v2_mud_Sizing;
v2_mud_Sizing.__cache = {};
Module['v2_mud_Sizing'] = v2_mud_Sizing;
Object.defineProperty(v2_mud_Sizing.prototype, "x", {
    get: function() {
        return _mud_v2_mud_Sizing__get_x(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Sizing__set_x(this.__ptr, value);
    }
});
Object.defineProperty(v2_mud_Sizing.prototype, "y", {
    get: function() {
        return _mud_v2_mud_Sizing__get_y(this.__ptr);
    },
    set: function(value) {
        _mud_v2_mud_Sizing__set_y(this.__ptr, value);
    }
});
v2_mud_Sizing.prototype["__destroy"] = v2_mud_Sizing.prototype.__destroy = function() {
    _mud_v2_mud_Sizing__destroy(this.__ptr);
};
// v2<size_t>
function v2_size_t(a0, a1) {
    if (a0 === undefined) { this.__ptr = _mud_v2_size_t__construct_0(); this.__type = v2_size_t.__type; getCache(v2_size_t)[this.__ptr] = this; return; }
    if (a1 === undefined) { this.__ptr = _mud_v2_size_t__construct_1(/*v*/a0); this.__type = v2_size_t.__type; getCache(v2_size_t)[this.__ptr] = this; return; }
    this.__ptr = _mud_v2_size_t__construct_2(/*x*/a0, /*y*/a1); this.__type = v2_size_t.__type; getCache(v2_size_t)[this.__ptr] = this;
};
v2_size_t.prototype = Object.create(WrapperObject.prototype);
v2_size_t.prototype.constructor = v2_size_t;
v2_size_t.prototype.__class = v2_size_t;
v2_size_t.__cache = {};
Module['v2_size_t'] = v2_size_t;
Object.defineProperty(v2_size_t.prototype, "x", {
    get: function() {
        return _mud_v2_size_t__get_x(this.__ptr);
    },
    set: function(value) {
        _mud_v2_size_t__set_x(this.__ptr, value);
    }
});
Object.defineProperty(v2_size_t.prototype, "y", {
    get: function() {
        return _mud_v2_size_t__get_y(this.__ptr);
    },
    set: function(value) {
        _mud_v2_size_t__set_y(this.__ptr, value);
    }
});
v2_size_t.prototype["__destroy"] = v2_size_t.prototype.__destroy = function() {
    _mud_v2_size_t__destroy(this.__ptr);
};
// Canvas
function Canvas() { throw "cannot construct a Canvas, no constructor in IDL" }
Canvas.prototype = Object.create(Widget.prototype);
Canvas.prototype.constructor = Canvas;
Canvas.prototype.__class = Canvas;
Canvas.__cache = {};
Module['Canvas'] = Canvas;
Canvas.prototype["__destroy"] = Canvas.prototype.__destroy = function() {
    _mud_Canvas__destroy(this.__ptr);
};
// Dockable
function Dockable() { throw "cannot construct a Dockable, no constructor in IDL" }
Dockable.prototype = Object.create(Widget.prototype);
Dockable.prototype.constructor = Dockable;
Dockable.prototype.__class = Dockable;
Dockable.__cache = {};
Module['Dockable'] = Dockable;
Dockable.prototype["__destroy"] = Dockable.prototype.__destroy = function() {
    _mud_Dockable__destroy(this.__ptr);
};
// Docker
function Docker() { throw "cannot construct a Docker, no constructor in IDL" }
Docker.prototype = Object.create(Widget.prototype);
Docker.prototype.constructor = Docker;
Docker.prototype.__class = Docker;
Docker.__cache = {};
Module['Docker'] = Docker;
Docker.prototype["__destroy"] = Docker.prototype.__destroy = function() {
    _mud_Docker__destroy(this.__ptr);
};
// Dockbar
function Dockbar() { throw "cannot construct a Dockbar, no constructor in IDL" }
Dockbar.prototype = Object.create(Docker.prototype);
Dockbar.prototype.constructor = Dockbar;
Dockbar.prototype.__class = Dockbar;
Dockbar.__cache = {};
Module['Dockbar'] = Dockbar;
Dockbar.prototype["__destroy"] = Dockbar.prototype.__destroy = function() {
    _mud_Dockbar__destroy(this.__ptr);
};
// Dockspace
function Dockspace() { throw "cannot construct a Dockspace, no constructor in IDL" }
Dockspace.prototype = Object.create(Docker.prototype);
Dockspace.prototype.constructor = Dockspace;
Dockspace.prototype.__class = Dockspace;
Dockspace.__cache = {};
Module['Dockspace'] = Dockspace;
Dockspace.prototype["__destroy"] = Dockspace.prototype.__destroy = function() {
    _mud_Dockspace__destroy(this.__ptr);
};
// Expandbox
function Expandbox() { throw "cannot construct a Expandbox, no constructor in IDL" }
Expandbox.prototype = Object.create(Widget.prototype);
Expandbox.prototype.constructor = Expandbox;
Expandbox.prototype.__class = Expandbox;
Expandbox.__cache = {};
Module['Expandbox'] = Expandbox;
Expandbox.prototype["__destroy"] = Expandbox.prototype.__destroy = function() {
    _mud_Expandbox__destroy(this.__ptr);
};
// Frame
function Frame() { throw "cannot construct a Frame, no constructor in IDL" }
Frame.prototype = Object.create(UiRect.prototype);
Frame.prototype.constructor = Frame;
Frame.prototype.__class = Frame;
Frame.__cache = {};
Module['Frame'] = Frame;
Frame.prototype["__destroy"] = Frame.prototype.__destroy = function() {
    _mud_Frame__destroy(this.__ptr);
};
// FrameSolver
function FrameSolver() { throw "cannot construct a FrameSolver, no constructor in IDL" }
FrameSolver.prototype = Object.create(UiRect.prototype);
FrameSolver.prototype.constructor = FrameSolver;
FrameSolver.prototype.__class = FrameSolver;
FrameSolver.__cache = {};
Module['FrameSolver'] = FrameSolver;
FrameSolver.prototype["__destroy"] = FrameSolver.prototype.__destroy = function() {
    _mud_FrameSolver__destroy(this.__ptr);
};
// Node
function Node() { throw "cannot construct a Node, no constructor in IDL" }
Node.prototype = Object.create(Widget.prototype);
Node.prototype.constructor = Node;
Node.prototype.__class = Node;
Node.__cache = {};
Module['Node'] = Node;
Node.prototype["__destroy"] = Node.prototype.__destroy = function() {
    _mud_Node__destroy(this.__ptr);
};
// NodePlug
function NodePlug() { throw "cannot construct a NodePlug, no constructor in IDL" }
NodePlug.prototype = Object.create(Widget.prototype);
NodePlug.prototype.constructor = NodePlug;
NodePlug.prototype.__class = NodePlug;
NodePlug.__cache = {};
Module['NodePlug'] = NodePlug;
NodePlug.prototype["__destroy"] = NodePlug.prototype.__destroy = function() {
    _mud_NodePlug__destroy(this.__ptr);
};
// RowSolver
function RowSolver() { throw "cannot construct a RowSolver, no constructor in IDL" }
RowSolver.prototype = Object.create(FrameSolver.prototype);
RowSolver.prototype.constructor = RowSolver;
RowSolver.prototype.__class = RowSolver;
RowSolver.__cache = {};
Module['RowSolver'] = RowSolver;
RowSolver.prototype["__destroy"] = RowSolver.prototype.__destroy = function() {
    _mud_RowSolver__destroy(this.__ptr);
};
// LineSolver
function LineSolver() { throw "cannot construct a LineSolver, no constructor in IDL" }
LineSolver.prototype = Object.create(RowSolver.prototype);
LineSolver.prototype.constructor = LineSolver;
LineSolver.prototype.__class = LineSolver;
LineSolver.__cache = {};
Module['LineSolver'] = LineSolver;
LineSolver.prototype["__destroy"] = LineSolver.prototype.__destroy = function() {
    _mud_LineSolver__destroy(this.__ptr);
};
// ScrollSheet
function ScrollSheet() { throw "cannot construct a ScrollSheet, no constructor in IDL" }
ScrollSheet.prototype = Object.create(Widget.prototype);
ScrollSheet.prototype.constructor = ScrollSheet;
ScrollSheet.prototype.__class = ScrollSheet;
ScrollSheet.__cache = {};
Module['ScrollSheet'] = ScrollSheet;
ScrollSheet.prototype["__destroy"] = ScrollSheet.prototype.__destroy = function() {
    _mud_ScrollSheet__destroy(this.__ptr);
};
// Sequence
function Sequence() { throw "cannot construct a Sequence, no constructor in IDL" }
Sequence.prototype = Object.create(Widget.prototype);
Sequence.prototype.constructor = Sequence;
Sequence.prototype.__class = Sequence;
Sequence.__cache = {};
Module['ui']['Sequence'] = Sequence;
Sequence.prototype["__destroy"] = Sequence.prototype.__destroy = function() {
    _mud_ui_Sequence__destroy(this.__ptr);
};
// Tabber
function Tabber() { throw "cannot construct a Tabber, no constructor in IDL" }
Tabber.prototype = Object.create(Widget.prototype);
Tabber.prototype.constructor = Tabber;
Tabber.prototype.__class = Tabber;
Tabber.__cache = {};
Module['Tabber'] = Tabber;
Tabber.prototype["__destroy"] = Tabber.prototype.__destroy = function() {
    _mud_Tabber__destroy(this.__ptr);
};
// Table
function Table() { throw "cannot construct a Table, no constructor in IDL" }
Table.prototype = Object.create(Widget.prototype);
Table.prototype.constructor = Table;
Table.prototype.__class = Table;
Table.__cache = {};
Module['Table'] = Table;
Table.prototype["__destroy"] = Table.prototype.__destroy = function() {
    _mud_Table__destroy(this.__ptr);
};
// TextEdit
function TextEdit() { throw "cannot construct a TextEdit, no constructor in IDL" }
TextEdit.prototype = Object.create(Widget.prototype);
TextEdit.prototype.constructor = TextEdit;
TextEdit.prototype.__class = TextEdit;
TextEdit.__cache = {};
Module['TextEdit'] = TextEdit;
TextEdit.prototype["__destroy"] = TextEdit.prototype.__destroy = function() {
    _mud_TextEdit__destroy(this.__ptr);
};
// Widget
function Widget() { throw "cannot construct a Widget, no constructor in IDL" }
Widget.prototype = Object.create(ControlNode.prototype);
Widget.prototype.constructor = Widget;
Widget.prototype.__class = Widget;
Widget.__cache = {};
Module['Widget'] = Widget;
Widget.prototype["focused"] = Widget.prototype.focused = function() {
    return !!(_mud_Widget_focused_0(this.__ptr));
};
Widget.prototype["hovered"] = Widget.prototype.hovered = function() {
    return !!(_mud_Widget_hovered_0(this.__ptr));
};
Widget.prototype["pressed"] = Widget.prototype.pressed = function() {
    return !!(_mud_Widget_pressed_0(this.__ptr));
};
Widget.prototype["activated"] = Widget.prototype.activated = function() {
    return !!(_mud_Widget_activated_0(this.__ptr));
};
Widget.prototype["selected"] = Widget.prototype.selected = function() {
    return !!(_mud_Widget_selected_0(this.__ptr));
};
Widget.prototype["modal"] = Widget.prototype.modal = function() {
    return !!(_mud_Widget_modal_0(this.__ptr));
};
Widget.prototype["closed"] = Widget.prototype.closed = function() {
    return !!(_mud_Widget_closed_0(this.__ptr));
};
Widget.prototype["ui_window"] = Widget.prototype.ui_window = function() {
    return wrapPointer(_mud_Widget_ui_window_0(this.__ptr), UiWindow);
};
Widget.prototype["ui"] = Widget.prototype.ui = function() {
    return wrapPointer(_mud_Widget_ui_0(this.__ptr), Ui);
};
Widget.prototype["parent_modal"] = Widget.prototype.parent_modal = function() {
    return wrapPointer(_mud_Widget_parent_modal_0(this.__ptr), Widget);
};
Widget.prototype["toggle_state"] = Widget.prototype.toggle_state = function(a0) {
    _mud_Widget_toggle_state_1(this.__ptr, /*state*/a0);
};
Widget.prototype["disable_state"] = Widget.prototype.disable_state = function(a0) {
    _mud_Widget_disable_state_1(this.__ptr, /*state*/a0);
};
Widget.prototype["set_state"] = Widget.prototype.set_state = function(a0, a1) {
    _mud_Widget_set_state_2(this.__ptr, /*state*/a0, /*enabled*/a1);
};
Widget.prototype["enable_state"] = Widget.prototype.enable_state = function(a0) {
    _mud_Widget_enable_state_1(this.__ptr, /*state*/a0);
};
Widget.prototype["clear_focus"] = Widget.prototype.clear_focus = function() {
    _mud_Widget_clear_focus_0(this.__ptr);
};
Widget.prototype["take_focus"] = Widget.prototype.take_focus = function() {
    _mud_Widget_take_focus_0(this.__ptr);
};
Widget.prototype["yield_focus"] = Widget.prototype.yield_focus = function() {
    _mud_Widget_yield_focus_0(this.__ptr);
};
Widget.prototype["take_modal"] = Widget.prototype.take_modal = function(a0) {
    _mud_Widget_take_modal_1(this.__ptr, /*device_filter*/a0);
};
Widget.prototype["yield_modal"] = Widget.prototype.yield_modal = function() {
    _mud_Widget_yield_modal_0(this.__ptr);
};
Widget.prototype["key_event"] = Widget.prototype.key_event = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_Widget_key_event_2(this.__ptr, /*code*/a0, /*event_type*/a1), KeyEvent); }
    return wrapPointer(_mud_Widget_key_event_3(this.__ptr, /*code*/a0, /*event_type*/a1, /*modifier*/a2), KeyEvent);
};
Widget.prototype["key_stroke"] = Widget.prototype.key_stroke = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_Widget_key_stroke_1(this.__ptr, /*code*/a0), KeyEvent); }
    return wrapPointer(_mud_Widget_key_stroke_2(this.__ptr, /*code*/a0, /*modifier*/a1), KeyEvent);
};
Widget.prototype["char_stroke"] = Widget.prototype.char_stroke = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_Widget_char_stroke_1(this.__ptr, /*code*/a0), KeyEvent); }
    return wrapPointer(_mud_Widget_char_stroke_2(this.__ptr, /*code*/a0, /*modifier*/a1), KeyEvent);
};
Widget.prototype["mouse_event"] = Widget.prototype.mouse_event = function(a0, a1, a2, a3) {
    if (a2 === undefined) { return wrapPointer(_mud_Widget_mouse_event_2(this.__ptr, /*device*/a0, /*event_type*/a1), MouseEvent); }
    if (a3 === undefined) { return wrapPointer(_mud_Widget_mouse_event_3(this.__ptr, /*device*/a0, /*event_type*/a1, /*modifier*/a2), MouseEvent); }
    return wrapPointer(_mud_Widget_mouse_event_4(this.__ptr, /*device*/a0, /*event_type*/a1, /*modifier*/a2, /*consume*/a3), MouseEvent);
};
Object.defineProperty(Widget.prototype, "frame", {
    get: function() {
        return wrapPointer(_mud_Widget__get_frame(this.__ptr), Frame);
    }});
Object.defineProperty(Widget.prototype, "state", {
    get: function() {
        return _mud_Widget__get_state(this.__ptr);
    },
    set: function(value) {
        _mud_Widget__set_state(this.__ptr, value);
    }
});
Object.defineProperty(Widget.prototype, "switch", {
    get: function() {
        return _mud_Widget__get_switch(this.__ptr);
    },
    set: function(value) {
        _mud_Widget__set_switch(this.__ptr, value);
    }
});
Object.defineProperty(Widget.prototype, "index", {
    get: function() {
        return _mud_Widget__get_index(this.__ptr);
    },
    set: function(value) {
        _mud_Widget__set_index(this.__ptr, value);
    }
});
Object.defineProperty(Widget.prototype, "open", {
    get: function() {
        return !!(_mud_Widget__get_open(this.__ptr));
    },
    set: function(value) {
        _mud_Widget__set_open(this.__ptr, value);
    }
});
Object.defineProperty(Widget.prototype, "body", {
    get: function() {
        return wrapPointer(_mud_Widget__get_body(this.__ptr), Widget);
    },
    set: function(value) {
        _mud_Widget__set_body(this.__ptr, value.__ptr);
    }
});
Widget.prototype["__destroy"] = Widget.prototype.__destroy = function() {
    _mud_Widget__destroy(this.__ptr);
};
// TreeNode
function TreeNode() { throw "cannot construct a TreeNode, no constructor in IDL" }
TreeNode.prototype = Object.create(Widget.prototype);
TreeNode.prototype.constructor = TreeNode;
TreeNode.prototype.__class = TreeNode;
TreeNode.__cache = {};
Module['TreeNode'] = TreeNode;
TreeNode.prototype["__destroy"] = TreeNode.prototype.__destroy = function() {
    _mud_TreeNode__destroy(this.__ptr);
};
// Ui
function Ui() { throw "cannot construct a Ui, no constructor in IDL" }
Ui.prototype = Object.create(Widget.prototype);
Ui.prototype.constructor = Ui;
Ui.prototype.__class = Ui;
Ui.__cache = {};
Module['Ui'] = Ui;
Ui.prototype["begin"] = Ui.prototype.begin = function() {
    return wrapPointer(_mud_Ui_begin_0(this.__ptr), Widget);
};
Ui.prototype["__destroy"] = Ui.prototype.__destroy = function() {
    _mud_Ui__destroy(this.__ptr);
};
// Window
function Window() { throw "cannot construct a Window, no constructor in IDL" }
Window.prototype = Object.create(Dockable.prototype);
Window.prototype.constructor = Window;
Window.prototype.__class = Window;
Window.__cache = {};
Module['Window'] = Window;
Window.prototype["__destroy"] = Window.prototype.__destroy = function() {
    _mud_Window__destroy(this.__ptr);
};
Module['ui']['widget'] = function(a0, a1, a2, a3, a4) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_widget_2(/*parent*/a0.__ptr, /*style*/a1.__ptr), Widget); }
    if (a3 === undefined) { return wrapPointer(_mud_ui_widget_3(/*parent*/a0.__ptr, /*style*/a1.__ptr, /*open*/a2), Widget); }
    if (a4 === undefined) { return wrapPointer(_mud_ui_widget_4(/*parent*/a0.__ptr, /*style*/a1.__ptr, /*open*/a2, /*length*/a3), Widget); }
    return wrapPointer(_mud_ui_widget_5(/*parent*/a0.__ptr, /*style*/a1.__ptr, /*open*/a2, /*length*/a3, /*index*/a4.__ptr), Widget);
};
Module['ui']['item'] = function(a0, a1, a2) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_item_2(/*parent*/a0.__ptr, /*style*/a1.__ptr), Widget); }
    return wrapPointer(_mud_ui_item_3(/*parent*/a0.__ptr, /*style*/a1.__ptr, ensureString(/*content*/a2)), Widget);
};
Module['ui']['multi_item'] = function(a0, a1, a2, a3) {
    if (a3 === undefined) { return wrapPointer(_mud_ui_multi_item_3(/*parent*/a0.__ptr, /*style*/a1.__ptr, ensureInt8(/*elements*/a2), /*elements*/a2.length), Widget); }
    return wrapPointer(_mud_ui_multi_item_4(/*parent*/a0.__ptr, /*style*/a1.__ptr, ensureInt8(/*elements*/a2), /*elements*/a2.length, /*element_style*/a3.__ptr), Widget);
};
Module['ui']['spanner'] = function(a0, a1, a2, a3) {
    return wrapPointer(_mud_ui_spanner_4(/*parent*/a0.__ptr, /*style*/a1.__ptr, /*dim*/a2, /*span*/a3), Widget);
};
Module['ui']['spacer'] = function(a0) {
    return wrapPointer(_mud_ui_spacer_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['icon'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_icon_2(/*parent*/a0.__ptr, ensureString(/*image*/a1)), Widget);
};
Module['ui']['label'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_label_2(/*parent*/a0.__ptr, ensureString(/*label*/a1)), Widget);
};
Module['ui']['title'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_title_2(/*parent*/a0.__ptr, ensureString(/*label*/a1)), Widget);
};
Module['ui']['message'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_message_2(/*parent*/a0.__ptr, ensureString(/*label*/a1)), Widget);
};
Module['ui']['text'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_text_2(/*parent*/a0.__ptr, ensureString(/*label*/a1)), Widget);
};
Module['ui']['button'] = function(a0, a1) {
    ensureCache.prepare();
    if (a1 === undefined) { return wrapPointer(_mud_ui_button_1(/*parent*/a0.__ptr), Widget); }
    return wrapPointer(_mud_ui_button_2(/*parent*/a0.__ptr, ensureString(/*content*/a1)), Widget);
};
Module['ui']['toggle'] = function(a0, a1, a2) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_toggle_2(/*parent*/a0.__ptr, /*on*/a1), Widget); }
    return wrapPointer(_mud_ui_toggle_3(/*parent*/a0.__ptr, /*on*/a1, ensureString(/*content*/a2)), Widget);
};
Module['ui']['multi_button'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_multi_button_2(/*parent*/a0.__ptr, ensureInt8(/*elements*/a1), /*elements*/a1.length), Widget); }
    return wrapPointer(_mud_ui_multi_button_3(/*parent*/a0.__ptr, ensureInt8(/*elements*/a1), /*elements*/a1.length, /*element_style*/a2.__ptr), Widget);
};
Module['ui']['multi_toggle'] = function(a0, a1, a2, a3) {
    if (a3 === undefined) { return wrapPointer(_mud_ui_multi_toggle_3(/*parent*/a0.__ptr, /*on*/a1, ensureInt8(/*elements*/a2), /*elements*/a2.length), Widget); }
    return wrapPointer(_mud_ui_multi_toggle_4(/*parent*/a0.__ptr, /*on*/a1, ensureInt8(/*elements*/a2), /*elements*/a2.length, /*element_style*/a3.__ptr), Widget);
};
Module['ui']['modal_button'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    return !!(_mud_ui_modal_button_4(/*screen*/a0.__ptr, /*parent*/a1.__ptr, ensureString(/*content*/a2), /*mode*/a3));
};
Module['ui']['modal_multi_button'] = function(a0, a1, a2, a3) {
    return !!(_mud_ui_modal_multi_button_4(/*screen*/a0.__ptr, /*parent*/a1.__ptr, ensureInt8(/*elements*/a2), /*elements*/a2.length, /*mode*/a3));
};
Module['ui']['checkbox'] = function(a0, a1) {
    return wrapPointer(_mud_ui_checkbox_2(/*parent*/a0.__ptr, /*on*/a1), Widget);
};
Module['ui']['fill_bar'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_fill_bar_2(/*parent*/a0.__ptr, /*percentage*/a1), Widget); }
    return wrapPointer(_mud_ui_fill_bar_3(/*parent*/a0.__ptr, /*percentage*/a1, /*dim*/a2), Widget);
};
Module['ui']['image256'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    if (a3 === undefined) { return wrapPointer(_mud_ui_image256_3(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*source*/a2.__ptr), Widget); }
    return wrapPointer(_mud_ui_image256_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*source*/a2.__ptr, /*size*/a3.__ptr), Widget);
};
Module['ui']['radio_choice'] = function(a0, a1, a2) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_radio_choice_3(/*parent*/a0.__ptr, ensureString(/*value*/a1), /*active*/a2), Widget);
};
Module['ui']['radio_switch'] = function(a0, a1, a2, a3) {
    if (a3 === undefined) { return !!(_mud_ui_radio_switch_3(/*parent*/a0.__ptr, ensureInt8(/*labels*/a1), /*labels*/a1.length, /*value*/a2)); }
    return !!(_mud_ui_radio_switch_4(/*parent*/a0.__ptr, ensureInt8(/*labels*/a1), /*labels*/a1.length, /*value*/a2, /*dim*/a3));
};
Module['ui']['popdown'] = function(a0, a1, a2, a3, a4) {
    return !!(_mud_ui_popdown_5(/*parent*/a0.__ptr, ensureInt8(/*choices*/a1), /*choices*/a1.length, /*value*/a2, /*position*/a3.__ptr, /*flags*/a4));
};
Module['ui']['dropdown'] = function(a0, a1, a2, a3, a4) {
    ensureCache.prepare();
    if (a4 === undefined) { return wrapPointer(_mud_ui_dropdown_4(/*parent*/a0.__ptr, /*style*/a1.__ptr, ensureString(/*value*/a2), /*flags*/a3), Widget); }
    return wrapPointer(_mud_ui_dropdown_5(/*parent*/a0.__ptr, /*style*/a1.__ptr, ensureString(/*value*/a2), /*flags*/a3, /*list_style*/a4.__ptr), Widget);
};
Module['ui']['dropdown_input'] = function(a0, a1, a2, a3) {
    if (a3 === undefined) { return !!(_mud_ui_dropdown_input_3(/*parent*/a0.__ptr, ensureInt8(/*choices*/a1), /*choices*/a1.length, /*value*/a2)); }
    return !!(_mud_ui_dropdown_input_4(/*parent*/a0.__ptr, ensureInt8(/*choices*/a1), /*choices*/a1.length, /*value*/a2, /*compact*/a3));
};
Module['ui']['typedown_input'] = function(a0, a1, a2) {
    return !!(_mud_ui_typedown_input_3(/*parent*/a0.__ptr, ensureInt8(/*choices*/a1), /*choices*/a1.length, /*value*/a2));
};
Module['ui']['menu_choice'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_menu_choice_2(/*parent*/a0.__ptr, ensureString(/*content*/a1)), Widget);
};
Module['ui']['menu'] = function(a0, a1, a2) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_menu_2(/*parent*/a0.__ptr, ensureString(/*label*/a1)), Widget); }
    return wrapPointer(_mud_ui_menu_3(/*parent*/a0.__ptr, ensureString(/*label*/a1), /*submenu*/a2), Widget);
};
Module['ui']['menubar'] = function(a0) {
    return wrapPointer(_mud_ui_menubar_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['toolbutton'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_toolbutton_2(/*parent*/a0.__ptr, ensureString(/*icon*/a1)), Widget);
};
Module['ui']['tooldock'] = function(a0) {
    return wrapPointer(_mud_ui_tooldock_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['toolbar'] = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_ui_toolbar_1(/*parent*/a0.__ptr), Widget); }
    return wrapPointer(_mud_ui_toolbar_2(/*parent*/a0.__ptr, /*wrap*/a1), Widget);
};
Module['ui']['select_list'] = function(a0) {
    return wrapPointer(_mud_ui_select_list_1(/*parent*/a0.__ptr), ScrollSheet);
};
Module['ui']['columns'] = function(a0, a1) {
    return wrapPointer(_mud_ui_columns_2(/*parent*/a0.__ptr, ensureFloat32(/*weights*/a1), /*weights*/a1.length), Table);
};
Module['ui']['table'] = function(a0, a1, a2) {
    return wrapPointer(_mud_ui_table_3(/*parent*/a0.__ptr, ensureInt8(/*columns*/a1), /*columns*/a1.length, ensureFloat32(/*weights*/a2), /*weights*/a2.length), Table);
};
Module['ui']['table_row'] = function(a0) {
    return wrapPointer(_mud_ui_table_row_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['table_separator'] = function(a0) {
    return wrapPointer(_mud_ui_table_separator_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['expandbox'] = function(a0, a1, a2) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_expandbox_2(/*parent*/a0.__ptr, ensureString(/*name*/a1)), Expandbox); }
    return wrapPointer(_mud_ui_expandbox_3(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*open*/a2), Expandbox);
};
Module['ui']['tree_node'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_tree_node_2(/*parent*/a0.__ptr, ensureString(/*name*/a1)), TreeNode); }
    if (a3 === undefined) { return wrapPointer(_mud_ui_tree_node_3(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*leaf*/a2), TreeNode); }
    return wrapPointer(_mud_ui_tree_node_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*leaf*/a2, /*open*/a3), TreeNode);
};
Module['ui']['tree'] = function(a0) {
    return wrapPointer(_mud_ui_tree_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['tab'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_tab_2(/*tabber*/a0.__ptr, ensureString(/*name*/a1)), Widget);
};
Module['ui']['tabber'] = function(a0) {
    return wrapPointer(_mud_ui_tabber_1(/*parent*/a0.__ptr), Tabber);
};
Module['ui']['row'] = function(a0) {
    return wrapPointer(_mud_ui_row_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['header'] = function(a0) {
    return wrapPointer(_mud_ui_header_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['div'] = function(a0) {
    return wrapPointer(_mud_ui_div_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['stack'] = function(a0) {
    return wrapPointer(_mud_ui_stack_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['sheet'] = function(a0) {
    return wrapPointer(_mud_ui_sheet_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['board'] = function(a0) {
    return wrapPointer(_mud_ui_board_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['layout'] = function(a0) {
    return wrapPointer(_mud_ui_layout_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['screen'] = function(a0) {
    return wrapPointer(_mud_ui_screen_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['decal'] = function(a0) {
    return wrapPointer(_mud_ui_decal_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['overlay'] = function(a0) {
    return wrapPointer(_mud_ui_overlay_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['title_header'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_title_header_2(/*parent*/a0.__ptr, ensureString(/*title*/a1)), Widget);
};
Module['ui']['dummy'] = function(a0, a1) {
    return wrapPointer(_mud_ui_dummy_2(/*parent*/a0.__ptr, /*size*/a1.__ptr), Widget);
};
Module['ui']['popup'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_popup_2(/*parent*/a0.__ptr, /*flags*/a1), Widget); }
    return wrapPointer(_mud_ui_popup_3(/*parent*/a0.__ptr, /*size*/a1.__ptr, /*flags*/a2), Widget);
};
Module['ui']['popup_at'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_popup_at_2(/*parent*/a0.__ptr, /*position*/a1.__ptr), Widget); }
    return wrapPointer(_mud_ui_popup_at_3(/*parent*/a0.__ptr, /*position*/a1.__ptr, /*flags*/a2), Widget);
};
Module['ui']['modal'] = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_ui_modal_1(/*parent*/a0.__ptr), Widget); }
    return wrapPointer(_mud_ui_modal_2(/*parent*/a0.__ptr, /*size*/a1.__ptr), Widget);
};
Module['ui']['auto_modal'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_auto_modal_2(/*parent*/a0.__ptr, /*mode*/a1), Widget); }
    return wrapPointer(_mud_ui_auto_modal_3(/*parent*/a0.__ptr, /*mode*/a1, /*size*/a2.__ptr), Widget);
};
Module['ui']['context'] = function(a0, a1, a2) {
    if (a2 === undefined) { return wrapPointer(_mud_ui_context_2(/*parent*/a0.__ptr, /*mode*/a1), Widget); }
    return wrapPointer(_mud_ui_context_3(/*parent*/a0.__ptr, /*mode*/a1, /*flags*/a2), Widget);
};
Module['ui']['hoverbox'] = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_ui_hoverbox_1(/*parent*/a0.__ptr), Widget); }
    return wrapPointer(_mud_ui_hoverbox_2(/*parent*/a0.__ptr, /*delay*/a1), Widget);
};
Module['ui']['tooltip'] = function(a0, a1, a2) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_tooltip_3(/*parent*/a0.__ptr, /*position*/a1.__ptr, ensureString(/*content*/a2)), Widget);
};
Module['ui']['cursor'] = function(a0, a1, a2, a3) {
    if (a3 === undefined) { return wrapPointer(_mud_ui_cursor_3(/*parent*/a0.__ptr, /*position*/a1.__ptr, /*hovered*/a2.__ptr), Widget); }
    return wrapPointer(_mud_ui_cursor_4(/*parent*/a0.__ptr, /*position*/a1.__ptr, /*hovered*/a2.__ptr, /*locked*/a3), Widget);
};
Module['ui']['rectangle'] = function(a0, a1) {
    return wrapPointer(_mud_ui_rectangle_2(/*parent*/a0.__ptr, /*rect*/a1.__ptr), Widget);
};
Module['ui']['dockspace'] = function(a0, a1) {
    return wrapPointer(_mud_ui_dockspace_2(/*parent*/a0.__ptr, /*docksystem*/a1.__ptr), Dockspace);
};
Module['ui']['dockbar'] = function(a0, a1) {
    return wrapPointer(_mud_ui_dockbar_2(/*parent*/a0.__ptr, /*docksystem*/a1.__ptr), Dockbar);
};
Module['ui']['dockitem'] = function(a0, a1, a2) {
    return wrapPointer(_mud_ui_dockitem_3(/*parent*/a0.__ptr, /*docksystem*/a1.__ptr, /*dock*/a2.__ptr), Widget);
};
Module['ui']['drag_float'] = function(a0, a1, a2) {
    if (a2 === undefined) { return !!(_mud_ui_drag_float_2(/*parent*/a0.__ptr, /*value*/a1)); }
    return !!(_mud_ui_drag_float_3(/*parent*/a0.__ptr, /*value*/a1, /*step*/a2));
};
Module['ui']['vec2_edit'] = function(a0, a1) {
    return !!(_mud_ui_vec2_edit_2(/*parent*/a0.__ptr, /*vec*/a1.__ptr));
};
Module['ui']['vec3_edit'] = function(a0, a1) {
    return !!(_mud_ui_vec3_edit_2(/*parent*/a0.__ptr, /*vec*/a1.__ptr));
};
Module['ui']['quat_edit'] = function(a0, a1) {
    return !!(_mud_ui_quat_edit_2(/*parent*/a0.__ptr, /*quat*/a1.__ptr));
};
Module['ui']['color_display'] = function(a0, a1) {
    return wrapPointer(_mud_ui_color_display_2(/*parent*/a0.__ptr, /*value*/a1.__ptr), Widget);
};
Module['ui']['color_edit'] = function(a0, a1) {
    return !!(_mud_ui_color_edit_2(/*parent*/a0.__ptr, /*value*/a1.__ptr));
};
Module['ui']['color_edit_simple'] = function(a0, a1) {
    return !!(_mud_ui_color_edit_simple_2(/*parent*/a0.__ptr, /*value*/a1.__ptr));
};
Module['ui']['color_toggle_edit'] = function(a0, a1) {
    return !!(_mud_ui_color_toggle_edit_2(/*parent*/a0.__ptr, /*value*/a1.__ptr));
};
Module['ui']['curve_graph'] = function(a0, a1, a2) {
    if (a2 === undefined) { return !!(_mud_ui_curve_graph_2(/*parent*/a0.__ptr, ensureFloat32(/*values*/a1), /*values*/a1.length)); }
    return !!(_mud_ui_curve_graph_3(/*parent*/a0.__ptr, ensureFloat32(/*values*/a1), /*values*/a1.length, ensureFloat32(/*points*/a2), /*points*/a2.length));
};
Module['ui']['curve_edit'] = function(a0, a1, a2) {
    if (a2 === undefined) { return !!(_mud_ui_curve_edit_2(/*parent*/a0.__ptr, ensureFloat32(/*values*/a1), /*values*/a1.length)); }
    return !!(_mud_ui_curve_edit_3(/*parent*/a0.__ptr, ensureFloat32(/*values*/a1), /*values*/a1.length, ensureFloat32(/*points*/a2), /*points*/a2.length));
};
Module['ui']['flag_field'] = function(a0, a1, a2, a3, a4) {
    ensureCache.prepare();
    if (a4 === undefined) { return !!(_mud_ui_flag_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2, /*shift*/a3)); }
    return !!(_mud_ui_flag_field_5(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2, /*shift*/a3, /*reverse*/a4));
};
Module['ui']['radio_field'] = function(a0, a1, a2, a3, a4, a5) {
    ensureCache.prepare();
    if (a4 === undefined) { return !!(_mud_ui_radio_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3)); }
    if (a5 === undefined) { return !!(_mud_ui_radio_field_5(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3, /*dim*/a4)); }
    return !!(_mud_ui_radio_field_6(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3, /*dim*/a4, /*reverse*/a5));
};
Module['ui']['dropdown_field'] = function(a0, a1, a2, a3, a4) {
    ensureCache.prepare();
    if (a4 === undefined) { return !!(_mud_ui_dropdown_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3)); }
    return !!(_mud_ui_dropdown_field_5(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3, /*reverse*/a4));
};
Module['ui']['typedown_field'] = function(a0, a1, a2, a3, a4) {
    ensureCache.prepare();
    if (a4 === undefined) { return !!(_mud_ui_typedown_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3)); }
    return !!(_mud_ui_typedown_field_5(/*parent*/a0.__ptr, ensureString(/*name*/a1), ensureInt8(/*choices*/a2), /*choices*/a2.length, /*value*/a3, /*reverse*/a4));
};
Module['ui']['color_field'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    if (a3 === undefined) { return !!(_mud_ui_color_field_3(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2.__ptr)); }
    return !!(_mud_ui_color_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2.__ptr, /*reverse*/a3));
};
Module['ui']['color_display_field'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    if (a3 === undefined) { _mud_ui_color_display_field_3(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2.__ptr); return; }
    _mud_ui_color_display_field_4(/*parent*/a0.__ptr, ensureString(/*name*/a1), /*value*/a2.__ptr, /*reverse*/a3);
};
Module['ui']['node_input'] = function(a0, a1, a2, a3, a4, a5) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_node_input_2(/*node*/a0.__ptr, ensureString(/*name*/a1)), NodePlug); }
    if (a3 === undefined) { return wrapPointer(_mud_ui_node_input_3(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2)), NodePlug); }
    if (a4 === undefined) { return wrapPointer(_mud_ui_node_input_4(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr), NodePlug); }
    if (a5 === undefined) { return wrapPointer(_mud_ui_node_input_5(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr, /*active*/a4), NodePlug); }
    return wrapPointer(_mud_ui_node_input_6(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr, /*active*/a4, /*connected*/a5), NodePlug);
};
Module['ui']['node_output'] = function(a0, a1, a2, a3, a4, a5) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_node_output_2(/*node*/a0.__ptr, ensureString(/*name*/a1)), NodePlug); }
    if (a3 === undefined) { return wrapPointer(_mud_ui_node_output_3(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2)), NodePlug); }
    if (a4 === undefined) { return wrapPointer(_mud_ui_node_output_4(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr), NodePlug); }
    if (a5 === undefined) { return wrapPointer(_mud_ui_node_output_5(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr, /*active*/a4), NodePlug); }
    return wrapPointer(_mud_ui_node_output_6(/*node*/a0.__ptr, ensureString(/*name*/a1), ensureString(/*icon*/a2), /*colour*/a3.__ptr, /*active*/a4, /*connected*/a5), NodePlug);
};
Module['ui']['node'] = function(a0, a1, a2, a3, a4) {
    ensureCache.prepare();
    if (a3 === undefined) { return wrapPointer(_mud_ui_node_3(/*parent*/a0.__ptr, ensureString(/*title*/a1), /*position*/a2.__ptr), Node); }
    if (a4 === undefined) { return wrapPointer(_mud_ui_node_4(/*parent*/a0.__ptr, ensureString(/*title*/a1), /*position*/a2.__ptr, /*order*/a3), Node); }
    return wrapPointer(_mud_ui_node_5(/*parent*/a0.__ptr, ensureString(/*title*/a1), /*position*/a2.__ptr, /*order*/a3, ensureRef(/*identity*/a4), ensureRefType(/*identity*/a4)), Node);
};
Module['ui']['node_cable'] = function(a0, a1, a2) {
    return wrapPointer(_mud_ui_node_cable_3(/*canvas*/a0.__ptr, /*plug_out*/a1.__ptr, /*plug_in*/a2.__ptr), Widget);
};
Module['ui']['canvas'] = function(a0, a1) {
    if (a1 === undefined) { return wrapPointer(_mud_ui_canvas_1(/*parent*/a0.__ptr), Canvas); }
    return wrapPointer(_mud_ui_canvas_2(/*parent*/a0.__ptr, /*num_nodes*/a1), Canvas);
};
Module['ui']['scrollable'] = function(a0) {
    return wrapPointer(_mud_ui_scrollable_1(/*parent*/a0.__ptr), Widget);
};
Module['ui']['sequence'] = function(a0) {
    return wrapPointer(_mud_ui_sequence_1(/*parent*/a0.__ptr), Sequence);
};
Module['ui']['scroll_sequence'] = function(a0) {
    return wrapPointer(_mud_ui_scroll_sequence_1(/*parent*/a0.__ptr), Sequence);
};
Module['ui']['select_logic'] = function(a0, a1, a2) {
    return !!(_mud_ui_select_logic_3(/*element*/a0.__ptr, ensureRef(/*object*/a1), ensureRefType(/*object*/a1), ensureRef(/*selection*/a2), ensureRefType(/*selection*/a2)));
};
Module['ui']['element'] = function(a0, a1) {
    return wrapPointer(_mud_ui_element_2(/*parent*/a0.__ptr, ensureRef(/*object*/a1), ensureRefType(/*object*/a1)), Widget);
};
Module['ui']['sequence_element'] = function(a0, a1) {
    return wrapPointer(_mud_ui_sequence_element_2(/*parent*/a0.__ptr, ensureRef(/*object*/a1), ensureRefType(/*object*/a1)), Widget);
};
Module['ui']['window'] = function(a0, a1, a2) {
    ensureCache.prepare();
    if (a2 === undefined) { return wrapPointer(_mud_ui_window_2(/*parent*/a0.__ptr, ensureString(/*title*/a1)), Window); }
    return wrapPointer(_mud_ui_window_3(/*parent*/a0.__ptr, ensureString(/*title*/a1), /*state*/a2), Window);
};
Module['ui']['dir_item'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_dir_item_2(/*parent*/a0.__ptr, ensureString(/*name*/a1)), Widget);
};
Module['ui']['file_item'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_file_item_2(/*parent*/a0.__ptr, ensureString(/*name*/a1)), Widget);
};
Module['ui']['dir_node'] = function(a0, a1, a2, a3) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_dir_node_4(/*parent*/a0.__ptr, ensureString(/*path*/a1), ensureString(/*name*/a2), /*collapsed*/a3), Widget);
};
Module['ui']['file_node'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_file_node_2(/*parent*/a0.__ptr, ensureString(/*name*/a1)), Widget);
};
Module['ui']['file_tree'] = function(a0, a1) {
    ensureCache.prepare();
    return wrapPointer(_mud_ui_file_tree_2(/*parent*/a0.__ptr, ensureString(/*path*/a1)), Widget);
};
Module['ColourPalette'] = span_uint32_t;

(function() {
    function setup() {
        CanvasConnect.__type = _mud_CanvasConnect__type();
        Clipboard.__type = _mud_Clipboard__type();
        Dock.__type = _mud_Dock__type();
        Docksystem.__type = _mud_Docksystem__type();
        Gradient.__type = _mud_Gradient__type();
        GridSolver.__type = _mud_GridSolver__type();
        ImageSkin.__type = _mud_ImageSkin__type();
        InkStyle.__type = _mud_InkStyle__type();
        Layer.__type = _mud_Layer__type();
        Layout.__type = _mud_Layout__type();
        NodeConnection.__type = _mud_NodeConnection__type();
        Paint.__type = _mud_Paint__type();
        Shadow.__type = _mud_Shadow__type();
        Space.__type = _mud_Space__type();
        Style.__type = _mud_Style__type();
        TableSolver.__type = _mud_TableSolver__type();
        Text.__type = _mud_Text__type();
        TextCursor.__type = _mud_TextCursor__type();
        TextMarker.__type = _mud_TextMarker__type();
        TextPaint.__type = _mud_TextPaint__type();
        TextSelection.__type = _mud_TextSelection__type();
        UiRect.__type = _mud_UiRect__type();
        UiWindow.__type = _mud_UiWindow__type();
        User.__type = _mud_User__type();
        Vg.__type = _mud_Vg__type();
        Canvas.__type = _mud_Canvas__type();
        Dockable.__type = _mud_Dockable__type();
        Docker.__type = _mud_Docker__type();
        Dockbar.__type = _mud_Dockbar__type();
        Dockspace.__type = _mud_Dockspace__type();
        Expandbox.__type = _mud_Expandbox__type();
        Frame.__type = _mud_Frame__type();
        FrameSolver.__type = _mud_FrameSolver__type();
        Node.__type = _mud_Node__type();
        NodePlug.__type = _mud_NodePlug__type();
        RowSolver.__type = _mud_RowSolver__type();
        LineSolver.__type = _mud_LineSolver__type();
        ScrollSheet.__type = _mud_ScrollSheet__type();
        Sequence.__type = _mud_ui_Sequence__type();
        Tabber.__type = _mud_Tabber__type();
        Table.__type = _mud_Table__type();
        TextEdit.__type = _mud_TextEdit__type();
        Widget.__type = _mud_Widget__type();
        TreeNode.__type = _mud_TreeNode__type();
        Ui.__type = _mud_Ui__type();
        Window.__type = _mud_Window__type();
        // Align
        Module['Align'] = Module['Align'] || {};
        Module['Align']['Left'] = _mud_Align_Left();
        Module['Align']['Center'] = _mud_Align_Center();
        Module['Align']['Right'] = _mud_Align_Right();
        Module['Align']['OutLeft'] = _mud_Align_OutLeft();
        Module['Align']['OutRight'] = _mud_Align_OutRight();
        Module['Align']['Count'] = _mud_Align_Count();
        // AutoLayout
        Module['AutoLayout'] = Module['AutoLayout'] || {};
        Module['AutoLayout']['None'] = _mud_AutoLayout_None();
        Module['AutoLayout']['Size'] = _mud_AutoLayout_Size();
        Module['AutoLayout']['Layout'] = _mud_AutoLayout_Layout();
        // Clip
        Module['Clip'] = Module['Clip'] || {};
        Module['Clip']['None'] = _mud_Clip_None();
        Module['Clip']['Clip'] = _mud_Clip_Clip();
        Module['Clip']['Unclip'] = _mud_Clip_Unclip();
        // FlowAxis
        Module['FlowAxis'] = Module['FlowAxis'] || {};
        Module['FlowAxis']['Reading'] = _mud_FlowAxis_Reading();
        Module['FlowAxis']['Paragraph'] = _mud_FlowAxis_Paragraph();
        Module['FlowAxis']['Same'] = _mud_FlowAxis_Same();
        Module['FlowAxis']['Flip'] = _mud_FlowAxis_Flip();
        Module['FlowAxis']['None'] = _mud_FlowAxis_None();
        // LayoutFlow
        Module['LayoutFlow'] = Module['LayoutFlow'] || {};
        Module['LayoutFlow']['Flow'] = _mud_LayoutFlow_Flow();
        Module['LayoutFlow']['Overlay'] = _mud_LayoutFlow_Overlay();
        Module['LayoutFlow']['Align'] = _mud_LayoutFlow_Align();
        Module['LayoutFlow']['Free'] = _mud_LayoutFlow_Free();
        // Opacity
        Module['Opacity'] = Module['Opacity'] || {};
        Module['Opacity']['Opaque'] = _mud_Opacity_Opaque();
        Module['Opacity']['Clear'] = _mud_Opacity_Clear();
        Module['Opacity']['Hollow'] = _mud_Opacity_Hollow();
        // Pivot
        Module['Pivot'] = Module['Pivot'] || {};
        Module['Pivot']['Forward'] = _mud_Pivot_Forward();
        Module['Pivot']['Reverse'] = _mud_Pivot_Reverse();
        // PopupFlags
        Module['ui']['PopupFlags'] = Module['ui']['PopupFlags'] || {};
        Module['ui']['PopupFlags']['None'] = _mud_ui_PopupFlags_None();
        Module['ui']['PopupFlags']['Modal'] = _mud_ui_PopupFlags_Modal();
        Module['ui']['PopupFlags']['Clamp'] = _mud_ui_PopupFlags_Clamp();
        Module['ui']['PopupFlags']['AutoClose'] = _mud_ui_PopupFlags_AutoClose();
        Module['ui']['PopupFlags']['AutoModal'] = _mud_ui_PopupFlags_AutoModal();
        // Preset
        Module['Preset'] = Module['Preset'] || {};
        Module['Preset']['Sheet'] = _mud_Preset_Sheet();
        Module['Preset']['Flex'] = _mud_Preset_Flex();
        Module['Preset']['Item'] = _mud_Preset_Item();
        Module['Preset']['Unit'] = _mud_Preset_Unit();
        Module['Preset']['Block'] = _mud_Preset_Block();
        Module['Preset']['Line'] = _mud_Preset_Line();
        Module['Preset']['Stack'] = _mud_Preset_Stack();
        Module['Preset']['Div'] = _mud_Preset_Div();
        Module['Preset']['Spacer'] = _mud_Preset_Spacer();
        Module['Preset']['Board'] = _mud_Preset_Board();
        Module['Preset']['Layout'] = _mud_Preset_Layout();
        // Sizing
        Module['Sizing'] = Module['Sizing'] || {};
        Module['Sizing']['Fixed'] = _mud_Sizing_Fixed();
        Module['Sizing']['Shrink'] = _mud_Sizing_Shrink();
        Module['Sizing']['Wrap'] = _mud_Sizing_Wrap();
        Module['Sizing']['Expand'] = _mud_Sizing_Expand();
        // Solver
        Module['Solver'] = Module['Solver'] || {};
        Module['Solver']['Frame'] = _mud_Solver_Frame();
        Module['Solver']['Row'] = _mud_Solver_Row();
        Module['Solver']['Grid'] = _mud_Solver_Grid();
        Module['Solver']['Table'] = _mud_Solver_Table();
        // WidgetState
        Module['NOSTATE'] = _mud_WidgetState_NOSTATE();
        Module['CREATED'] = _mud_WidgetState_CREATED();
        Module['HOVERED'] = _mud_WidgetState_HOVERED();
        Module['PRESSED'] = _mud_WidgetState_PRESSED();
        Module['ACTIVATED'] = _mud_WidgetState_ACTIVATED();
        Module['ACTIVE'] = _mud_WidgetState_ACTIVE();
        Module['SELECTED'] = _mud_WidgetState_SELECTED();
        Module['DISABLED'] = _mud_WidgetState_DISABLED();
        Module['DRAGGED'] = _mud_WidgetState_DRAGGED();
        Module['FOCUSED'] = _mud_WidgetState_FOCUSED();
        Module['CLOSED'] = _mud_WidgetState_CLOSED();
        // WindowState
        Module['WINDOW_NOSTATE'] = _mud_WindowState_WINDOW_NOSTATE();
        Module['WINDOW_HEADER'] = _mud_WindowState_WINDOW_HEADER();
        Module['WINDOW_DOCKABLE'] = _mud_WindowState_WINDOW_DOCKABLE();
        Module['WINDOW_CLOSABLE'] = _mud_WindowState_WINDOW_CLOSABLE();
        Module['WINDOW_MOVABLE'] = _mud_WindowState_WINDOW_MOVABLE();
        Module['WINDOW_SIZABLE'] = _mud_WindowState_WINDOW_SIZABLE();
        Module['WINDOW_DEFAULT'] = _mud_WindowState_WINDOW_DEFAULT();
    }
    if (Module['calledRun']) setup();
    else addOnPreMain(setup);
})();
