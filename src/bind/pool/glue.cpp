#include <infra/Api.h>
#include <type/Api.h>
#include <pool/Api.h>

#ifdef MUD_PLATFORM_EMSCRIPTEN
#include <emscripten.h>
#define DECL EMSCRIPTEN_KEEPALIVE
#else
#define DECL
#endif
#include <cstdint>


extern "C" {
	
	// HandlePool
	void DECL mud_HandlePool__destroy(mud::HandlePool* self) {
		delete self;
	}
	// Pool
	void DECL mud_Pool__destroy(mud::Pool* self) {
		delete self;
	}
	
}


