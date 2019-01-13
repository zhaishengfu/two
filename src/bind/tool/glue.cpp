#include <infra/Api.h>
#include <tree/Api.h>
#include <type/Api.h>
#include <refl/Api.h>
#include <srlz/Api.h>
#include <lang/Api.h>
#include <math/Api.h>
#include <geom/Api.h>
#include <ctx/Api.h>
#include <ui/Api.h>
#include <uio/Api.h>
#include <gfx/Api.h>
#include <gfx-pbr/Api.h>
#include <gfx-ui/Api.h>
#include <gfx-edit/Api.h>
#include <tool/Api.h>

#ifdef MUD_PLATFORM_EMSCRIPTEN
#include <emscripten.h>
#define DECL EMSCRIPTEN_KEEPALIVE
#else
#define DECL
#endif
#include <cstdint>


extern "C" {
	
	// EditContext
	mud::UndoTool* DECL mud_EditContext__get_undo_tool(mud::EditContext* self) {
		return &self->m_undo_tool;
	}
	mud::RedoTool* DECL mud_EditContext__get_redo_tool(mud::EditContext* self) {
		return &self->m_redo_tool;
	}
	mud::Plane* DECL mud_EditContext__get_work_plane(mud::EditContext* self) {
		static mud::Plane temp;
		return (temp = self->m_work_plane, &temp);
	}
	void DECL mud_EditContext__set_work_plane(mud::EditContext* self, mud::Plane* value) {
		self->m_work_plane = *value;
	}
	mud::TranslateTool* DECL mud_EditContext__get_translate_tool(mud::EditContext* self) {
		return &self->m_translate_tool;
	}
	mud::RotateTool* DECL mud_EditContext__get_rotate_tool(mud::EditContext* self) {
		return &self->m_rotate_tool;
	}
	mud::ScaleTool* DECL mud_EditContext__get_scale_tool(mud::EditContext* self) {
		return &self->m_scale_tool;
	}
	mud::Viewer* DECL mud_EditContext__get_viewer(mud::EditContext* self) {
		return self->m_viewer;
	}
	void DECL mud_EditContext__set_viewer(mud::EditContext* self, mud::Viewer* value) {
		self->m_viewer = value;
	}
	mud::ViewportTool* DECL mud_EditContext__get_tool(mud::EditContext* self) {
		return self->m_tool;
	}
	void DECL mud_EditContext__set_tool(mud::EditContext* self, mud::ViewportTool* value) {
		self->m_tool = value;
	}
	mud::SpatialTool* DECL mud_EditContext__get_spatial_tool(mud::EditContext* self) {
		return self->m_spatial_tool;
	}
	void DECL mud_EditContext__set_spatial_tool(mud::EditContext* self, mud::SpatialTool* value) {
		self->m_spatial_tool = value;
	}
	mud::Brush* DECL mud_EditContext__get_brush(mud::EditContext* self) {
		return self->m_brush;
	}
	void DECL mud_EditContext__set_brush(mud::EditContext* self, mud::Brush* value) {
		self->m_brush = value;
	}
	void DECL mud_EditContext__destroy(mud::EditContext* self) {
		delete self;
	}
	// EditorAction
	void DECL mud_EditorAction__destroy(mud::EditorAction* self) {
		delete self;
	}
	// Gizmo
	mud::Gizmo* DECL mud_Gizmo_Gizmo_0() {
		return new mud::Gizmo();
	}
	void DECL mud_Gizmo__destroy(mud::Gizmo* self) {
		delete self;
	}
	// Tool
	mud::Type* DECL mud_Tool__get_type(mud::Tool* self) {
		return &self->m_type;
	}
	mud::ToolContext* DECL mud_Tool__get_context(mud::Tool* self) {
		return &self->m_context;
	}
	const char* DECL mud_Tool__get_name(mud::Tool* self) {
		return self->m_name.c_str();
	}
	void DECL mud_Tool__set_name(mud::Tool* self, const char* value) {
		self->m_name = value;
	}
	mud::ToolState DECL mud_Tool__get_state(mud::Tool* self) {
		return self->m_state;
	}
	void DECL mud_Tool__set_state(mud::Tool* self, mud::ToolState value) {
		self->m_state = value;
	}
	void DECL mud_Tool__destroy(mud::Tool* self) {
		delete self;
	}
	// ToolContext
	mud::ToolContext* DECL mud_ToolContext_ToolContext_0() {
		return new mud::ToolContext();
	}
	void DECL mud_ToolContext__destroy(mud::ToolContext* self) {
		delete self;
	}
	// ToolOption
	void DECL mud_ToolOption__destroy(mud::ToolOption* self) {
		delete self;
	}
	// RedoTool
	void DECL mud_RedoTool__destroy(mud::RedoTool* self) {
		delete self;
	}
	// ViewportTool
	void DECL mud_ViewportTool__destroy(mud::ViewportTool* self) {
		delete self;
	}
	// SpatialTool
	void DECL mud_SpatialTool__destroy(mud::SpatialTool* self) {
		delete self;
	}
	// Brush
	void DECL mud_Brush__destroy(mud::Brush* self) {
		delete self;
	}
	// CircleBrush
	mud::CircleBrush* DECL mud_CircleBrush_CircleBrush_1(mud::ToolContext* context) {
		return new mud::CircleBrush(*context);
	}
	mud::Creator* DECL mud_CircleBrush__get_creator(mud::CircleBrush* self) {
		return &self->m_creator;
	}
	float DECL mud_CircleBrush__get_radius(mud::CircleBrush* self) {
		return self->m_radius;
	}
	void DECL mud_CircleBrush__set_radius(mud::CircleBrush* self, float value) {
		self->m_radius = value;
	}
	float DECL mud_CircleBrush__get_maxSpotRadius(mud::CircleBrush* self) {
		return self->m_maxSpotRadius;
	}
	void DECL mud_CircleBrush__set_maxSpotRadius(mud::CircleBrush* self, float value) {
		self->m_maxSpotRadius = value;
	}
	void DECL mud_CircleBrush__destroy(mud::CircleBrush* self) {
		delete self;
	}
	// PlaceBrush
	mud::PlaceBrush* DECL mud_PlaceBrush_PlaceBrush_1(mud::ToolContext* context) {
		return new mud::PlaceBrush(*context);
	}
	mud::Creator* DECL mud_PlaceBrush__get_creator(mud::PlaceBrush* self) {
		return &self->m_creator;
	}
	void DECL mud_PlaceBrush__destroy(mud::PlaceBrush* self) {
		delete self;
	}
	// PlaneSnapOption
	void DECL mud_PlaneSnapOption__destroy(mud::PlaneSnapOption* self) {
		delete self;
	}
	// ScriptedBrush
	mud::ScriptedBrush* DECL mud_ScriptedBrush_ScriptedBrush_2(mud::ToolContext* context, mud::Script* script) {
		return new mud::ScriptedBrush(*context, *script);
	}
	mud::Call* DECL mud_ScriptedBrush__get_call(mud::ScriptedBrush* self) {
		static mud::Call temp;
		return (temp = self->m_call, &temp);
	}
	void DECL mud_ScriptedBrush__set_call(mud::ScriptedBrush* self, mud::Call* value) {
		self->m_call = *value;
	}
	void DECL mud_ScriptedBrush__destroy(mud::ScriptedBrush* self) {
		delete self;
	}
	// TransformAction
	void DECL mud_TransformAction__destroy(mud::TransformAction* self) {
		delete self;
	}
	// RotateAction
	void DECL mud_RotateAction__destroy(mud::RotateAction* self) {
		delete self;
	}
	// TransformTool
	void DECL mud_TransformTool__destroy(mud::TransformTool* self) {
		delete self;
	}
	// RotateTool
	void DECL mud_RotateTool__destroy(mud::RotateTool* self) {
		delete self;
	}
	// ScaleAction
	void DECL mud_ScaleAction__destroy(mud::ScaleAction* self) {
		delete self;
	}
	// ScaleTool
	void DECL mud_ScaleTool__destroy(mud::ScaleTool* self) {
		delete self;
	}
	// TranslateAction
	void DECL mud_TranslateAction__destroy(mud::TranslateAction* self) {
		delete self;
	}
	// CopyAction
	void DECL mud_CopyAction__destroy(mud::CopyAction* self) {
		delete self;
	}
	// CopyTool
	void DECL mud_CopyTool__destroy(mud::CopyTool* self) {
		delete self;
	}
	// FrameViewTool
	void DECL mud_FrameViewTool__destroy(mud::FrameViewTool* self) {
		delete self;
	}
	// TranslateTool
	void DECL mud_TranslateTool__destroy(mud::TranslateTool* self) {
		delete self;
	}
	// UndoTool
	void DECL mud_UndoTool__destroy(mud::UndoTool* self) {
		delete self;
	}
	// ViewAction
	void DECL mud_ViewAction__destroy(mud::ViewAction* self) {
		delete self;
	}
	// ViewTool
	void DECL mud_ViewTool__destroy(mud::ViewTool* self) {
		delete self;
	}
	// WorkPlaneAction
	void DECL mud_WorkPlaneAction__destroy(mud::WorkPlaneAction* self) {
		delete self;
	}
	// WorkPlaneTool
	void DECL mud_WorkPlaneTool__destroy(mud::WorkPlaneTool* self) {
		delete self;
	}
	// WorldSnapOption
	void DECL mud_WorldSnapOption__destroy(mud::WorldSnapOption* self) {
		delete self;
	}
	// ToolState
	mud::ToolState DECL mud_ToolState_Inactive() {
		return mud::ToolState::Inactive;
	}
	mud::ToolState DECL mud_ToolState_Done() {
		return mud::ToolState::Done;
	}
	mud::ToolState DECL mud_ToolState_Active() {
		return mud::ToolState::Active;
	}
	
}


