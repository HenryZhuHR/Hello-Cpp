#include<iostream>
#include <string>
#include <opencv2/opencv.hpp>
int main(int argc, char* argv[]){
    std::cout << argv[1] << std::endl;

  if (argc != 2)
  {
    printf("usage: test-opencv <Image_Path>\n");
    return -1;
  }

  cv::Mat image = cv::imread(argv[1], 1);

  if (!image.data)
  {
    printf("No image data \n");
    return -1;
  }
  cv::namedWindow("Display Image", cv::WindowFlags::WINDOW_AUTOSIZE);
  cv::imshow("Display Image", image);
  cv::waitKey(0);
    return 0;
}