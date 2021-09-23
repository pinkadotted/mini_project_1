from org.transcrypt.stubs.browser import *
import random

array = []

## insertion_sort function
def insertion_sort(unsorted_list):
	n = len(unsorted_list)
	for outer_index in range(1,n):
		inner_index = outer_index
		while inner_index > 0 and unsorted_list[inner_index] < unsorted_list[inner_index - 1]:
			unsorted_list[inner_index], unsorted_list[inner_index - 1] = unsorted_list[inner_index - 1], unsorted_list[inner_index]
			inner_index -= 1
	return unsorted_list

def str_to_list(string):
	cleaned = string.split(',')
	cleaned_list = [int(i) for i in cleaned]
	return cleaned_list

# def error_catcher(input_value):
# 	if input_value == '':
# 		window.alert("Your textbox is empty")
# 		return
# 	#input_list = str_to_list(input_value)
# 	for item in input_value:
# 		if type(item) == str:
# 			window.alert("You have entered an alphabet!")
# 	return

## function to convert lists into string format
def list_to_string(sorted_list):
	array_str = ''
	for item in sorted_list:
		array_str += (str(item)) + ', '
	array_str = array_str[:-2] + '.'
	return array_str

## generating random integer function
def gen_random_int(number, seed):
	my_list = []
	for num in range(number):
		my_list.append(num)
    	#print(my_list)
	random.shuffle(my_list, random.seed(seed))
	return my_list

## generating a list of random integers and outputting it as a string on the HTML page
def generate():
	global array
	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the global variable array
	array = gen_random_int(number, seed)

	## converting the array list into a string separated by commas and ending with a fullstop. 
	arr_str = list_to_string(array)

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = arr_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the global variable array and 
			copy it to a new list
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# call sorting algorithm on array
	sorted_array = insertion_sort(array)

	# converting list into a string
	array_str = list_to_string(sorted_array)

	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return
#	elif type(value) == str:
#		window.alert("You have entered an alphabet!")
#		return 

	# Your code should start from here
	# store the final string to the variable array_str
	#listed = list(value)

	value = str_to_list(value)

#	error_catcher(value)
	for item in value:
		if type(int(item)) != int:
			value.remove(item)

	#for item in cleaned_list:
#		if type(item) == str:
#			window.alert("You have entered an alphabet!")
#			break

	sorted_array = insertion_sort(value)

	array_str = list_to_string(sorted_array)

	document.getElementById("sorted").innerHTML = array_str


