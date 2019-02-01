//  Copyright (c) 2019 Hugo Amiard hugo.amiard@laposte.net
//  This software is provided 'as-is' under the zlib License, see the LICENSE.txt file.
//  This notice and the license may not be removed or altered from any source distribution.

#pragma once

#include <stl/vector.h>
#include <stl/algorithm.h>
#include <infra/Config.h>
#include <infra/Array.h>

namespace mud
{
	export_ template <class T>
	array<T> to_array(vector<T>& vec) { return { &vec[0], vec.size() }; }
	export_ template <class T>
	array<T> to_array(vector<T>& vec, size_t offset) { return { &vec[offset], vec.size() - offset }; }
	export_ template <class T>
	array<T> to_array(vector<T>& vec, size_t offset, size_t count) { return { &vec[offset], count }; }

	template <class T, class U>
	array<T> to_array_cast(vector<U>& vec) { return{ (T*)&vec[0], vec.size() }; }

	export_ template <class T>
	vector<T> to_vector(const array<T>& array) { return { array.m_pointer, array.m_pointer + array.m_count }; }
	
	export_ template <class T>
	inline bool has(const vector<T>& vec, const T& value)
	{
		return find(vec.begin(), vec.end(), value) != vec.end();
	}
	
	export_ template <class T>
	inline bool has(std::initializer_list<T> vec, const T& value)
	{
		return find(vec.begin(), vec.end(), value) != vec.end();
	}

	export_ template <class T, class U>
	inline void cast(const vector<T>& source, vector<U>& target)
	{
		target.reserve(source.size());
		for(const T& val : source)
			target.push_back(static_cast<U>(val));
	}

	export_ template <class U, class T>
	inline vector<U> convert(const vector<T>& source)
	{
		vector<U> target;
		cast(source, target);
		return target;
	}

	export_ template <class U, class T, class Op>
	inline vector<U> convert(const vector<T>& source, Op op)
	{
		vector<U> result;
		result.resize(source.size());
		transform(source.begin(), source.end(), result.begin(), op);
		return result;
	}

	template <class U, class T, class F>
	export_ vector<U> transform(const vector<T>& vec, F func)
	{
		vector<U> result;
		for(const T& value : vec)
			result.push_back(func(value));
		return result;
	}

	template <class V, class T, class U, class F>
	export_ vector<V> transform(const vector<T>& a, const vector<U>& b, F func)
	{
		vector<V> result;
		for(size_t i = 0; i < a.size(); ++i)
			result.push_back(func(a[i], b[i]));
		return result;
	}

	template <class T, class F>
	export_ vector<T> transform(size_t begin, size_t end, F func)
	{
		vector<T> result;
		for(size_t i = begin; i < end; ++i)
			result.push_back(func(i));
		return result;
	}
}
