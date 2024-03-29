#include <iostream>
#include <string>
#include <vector>

#ifndef BUFFER_H
#define BUFFER_H


class Buffer
{
  private:
    unsigned char* buf;
    int            capacity;
    int            length;
    std::string    name;

  public:
    /**
     * 单参数构造函数
     */
    explicit Buffer(int capacity, const std::string& name = "tempBuffer") : buf(new unsigned char[capacity]{0}), capacity(capacity), length(0), name(name)
    {
        std::cout << this->name << " [constructor] called: " << *this << std::endl;
    }
    ~Buffer()
    {
        std::cout << this->name << " [destructor] called: " << *this << std::endl;
        delete[] buf;
    }

    /**
     * 拷贝构造函数
     */
    Buffer(Buffer& buffer)
    {
        std::cout << this->name << " [copy constructor] called: " << *this << std::endl;
        this->capacity = buffer.capacity;
        this->length   = buffer.length;
        this->buf      = new unsigned char[buffer.capacity];
        std::copy(buffer.buf, buffer.buf + buffer.capacity, this->buf);
    }
    /**
     * 拷贝赋值函数
     */
    Buffer& operator=(Buffer const& buffer)
    {
        std::cout << this->name << "[copy assignment operator] called: " << &buffer << std::endl;

        if (this != &buffer)
        {
            this->capacity = buffer.capacity;
            this->length   = buffer.length;
            delete[] this->buf;
            this->buf = new unsigned char[buffer.capacity];
            std::copy(buffer.buf, buffer.buf + buffer.capacity, this->buf);
        }
        return *this;
    }
    /**
     * 移动构造函数
     */
    Buffer(Buffer&& buffer) noexcept
    { // left value reference
        std::cout << this->name << " [move constructor] called: " << buffer << std::endl;
        this->capacity  = buffer.capacity;
        this->length    = buffer.length;
        this->buf       = buffer.buf;
        buffer.capacity = 0;
        buffer.length   = 0;
        buffer.buf      = nullptr;
    }
    /**
     * 移动赋值函数
     */
    Buffer& operator=(Buffer&& buffer) noexcept
    {
        std::cout << this->name << " [move assignment operator] called: " << buffer << std::endl;

        if (this != &buffer)
        {
            this->capacity = buffer.capacity;
            this->length   = buffer.length;
            this->buf      = buffer.buf;
            /**
             * 偷完资源后，原对象的资源就没有了，所以要把原对象的资源清空
             * 尤其是指针
             */
            buffer.capacity = 0;
            buffer.length   = 0;
            buffer.buf      = nullptr;
        }

        return *this;
    }

  public:
    int GetLength() { return length; }
    int GetCapacity() { return capacity; }

  public:
    bool write(unsigned char value)
    {
        if (length == capacity)
            return false;
        buf[length++] = value;
        return true;
    }
    void append(const unsigned char* data, int length)
    {
        if (this->length + length > this->capacity)
        {
            unsigned char* new_buf = new unsigned char[this->capacity + length];
            std::copy(this->buf, this->buf + this->capacity, new_buf);
            std::copy(data, data + length, new_buf + this->capacity);
            delete[] this->buf;
            this->buf = new_buf;
            this->capacity += length;
        }
        else
        {
            std::copy(data, data + length, this->buf + this->length);
        }
        this->length += length;
    }
    void print()
    {
        std::cout << this->name << " Buffer: ";
        for (int i = 0; i < this->length; i++)
        {
            std::cout << this->buf[i];
        }
        std::cout << std::endl;
    }

  public:
    friend std::ostream& operator<<(std::ostream& os, Buffer& buffer)
    {
        os << "Buffer(" << buffer.length << "/" << buffer.capacity << ")[";
        for (int i = 0; i < buffer.capacity; i++)
        {
            os << (int)buffer.buf[i] << ",";
        }
        os << "]";
        return os;
    }
};
#endif

int main(int argc, char const* argv[])
{
    {
        std::cout << std::endl
                  << " ========== in vector ========== " << std::endl;
        auto buffers = std::vector<Buffer>();

        std::cout << " == push buf 2 " << std::endl;
        buffers.push_back(Buffer(2, "buf_2"));
        std::cout << std::endl;

        std::cout << " == push buf 4 " << std::endl;
        buffers.push_back(Buffer(4, "buf_4"));
        std::cout << std::endl;

        std::cout << " == push buf 6 " << std::endl;
        buffers.push_back(Buffer(6, "buf_6"));
        std::cout << std::endl;

        std::cout << " == push buf 8 " << std::endl;
        buffers.push_back(Buffer(8, "buf_8"));
        std::cout << std::endl;
        
        std::cout << " == push buf 7 " << std::endl;
        buffers.push_back(Buffer(7, "buf_7"));
        std::cout << std::endl;
        
        std::cout << " finish domain " << std::endl;
    }
    return 0;
    {
        std::cout << std::endl
                  << " ========== auto buffer = Buffer(5); ========== " << std::endl;
        Buffer buffer(5, "buffer1");
        std::cout << " finish domain " << std::endl;
    }
    {
        std::cout << std::endl
                  << " ========== auto buffer = Buffer(10); ========== " << std::endl;
        auto buffer = Buffer(10, "buffer2"); // left value (buffer) = right value (Buffer(16));
        std::cout << " finish domain " << std::endl;
    }
    return 0;
}
