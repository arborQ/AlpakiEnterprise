python -m grpc_tools.protoc -I.\src\protos\ --python_out=. --grpc_python_out=. .\src\protos\greet.proto