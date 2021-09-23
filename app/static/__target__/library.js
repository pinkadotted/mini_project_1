// Transcrypt'ed from Python, 2021-09-22 09:40:11
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var array = [];
export var insertion_sort = function (unsorted_list) {
	var n = len (unsorted_list);
	for (var outer_index = 1; outer_index < n; outer_index++) {
		var inner_index = outer_index;
		while (inner_index > 0 && unsorted_list [inner_index] < unsorted_list [inner_index - 1]) {
			var __left0__ = tuple ([unsorted_list [inner_index - 1], unsorted_list [inner_index]]);
			unsorted_list [inner_index] = __left0__ [0];
			unsorted_list [inner_index - 1] = __left0__ [1];
			inner_index--;
		}
	}
	return unsorted_list;
};
export var str_to_list = function (string) {
	var cleaned = string.py_split (',');
	var cleaned_list = (function () {
		var __accu0__ = [];
		for (var i of cleaned) {
			__accu0__.append (int (i));
		}
		return __accu0__;
	}) ();
	return cleaned_list;
};
export var list_to_string = function (sorted_list) {
	var array_str = '';
	for (var item of sorted_list) {
		array_str += str (item) + ', ';
	}
	var array_str = array_str.__getslice__ (0, -(2), 1) + '.';
	return array_str;
};
export var gen_random_int = function (number, seed) {
	var my_list = [];
	for (var num = 0; num < number; num++) {
		my_list.append (num);
	}
	random.shuffle (my_list, random.seed (seed));
	return my_list;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	array = gen_random_int (number, seed);
	var arr_str = list_to_string (array);
	document.getElementById ('generate').innerHTML = arr_str;
};
export var sortnumber1 = function () {
	var sorted_array = insertion_sort (array);
	var array_str = list_to_string (sorted_array);
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var value = str_to_list (value);
	for (var item of value) {
		if (py_typeof (int (item)) != int) {
			value.remove (item);
		}
	}
	var sorted_array = insertion_sort (value);
	var array_str = list_to_string (sorted_array);
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map