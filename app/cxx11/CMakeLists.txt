set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin/cxx11)

# link_directories(${PROJECT_SOURCE_DIR}/bin/stl)

# add_executable(cxx11 cxx11.cpp)     # new data type in C++11
# add_executable(lambda_expression lambda_expression.cpp)     # Lambda expression
# add_executable(lvalue_rvalue lvalue_rvalue.cpp) # lvalue rvalue
add_executable(universal_reference universal_reference.cpp) # universal reference

# add_executable(std_function std_function.cpp)               # std_function
# add_executable(std_bind std_bind.cpp)                       # std_bind
# add_executable(variadic_templates variadic_templates.cpp)   # variadic templates
# add_executable(
# variadic_templates-recursive_print
# variadic_templates-recursive_print.cpp
# )                                                       # variadic templates
# add_executable(smart_pointer smart_pointer.cpp)             # smart pointer