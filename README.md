﻿# Implement A Multiplication Table

Please read the following requirement:

I want to create a multiplication table. The input should be 2 integers specifying the start and the end of the table:

AC1: The start number must be smaller than or equal to the end number. Or the function will return `null`.

AC2: The start number and the end number can be any number in a range of 1 to 1000 (inclusive).

AC3: The output should be a string represents the multiplication table. Suppose that the start number is *2* and the end number is *4*, the output should be something like the following. Please note that all columns should be aligned properly.

```
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
```

## Acceptance Criteria

* Please draw task diagrams.

  ![](D:\GoogleDownload\功能结构图.png)

* Please define all the methods according to your task diagram.

* Please write down a test case using *given...when...then* pattern for a leaf block. Then implement the block to pass the test.

  ```
  //isStartNumberSmallerThanEndNumber
  case1:
  	given:2,4
  	when:call function isStartNumberSmallerThanEndNumber
  	then:return true
  case2:
  	given:4,2
  	when:call function isStartNumberSmallerThanEndNumber
  	then:return false
  case3:
  	given:2,2
  	when:call function isStartNumberSmallerThanEndNumber
  	then: return true   
  //isInRangeOf1to1000
  case1:
  	given:2,500
  	when:call function isInRangeOf1to1000
  	then:return true
  case2:
  	given:-1,500
  	when:call function isInRangeOf1to1000
  	then:return false
  case3:
  	given:500,1500
  	when:call function isInRangeOf1to1000
  	then:return false
  case4:
  	given:-500,1500
  	when:call function isInRangeOf1to1000
  	then:return false
  //buildMultiplicationTable
  case1:
  	given:2,4
  	when:call function buildMultiplicationTable
  	then:return 
  	2*2=4
  	2*3=6 3*3=9
  	2*4=8 3*4=12 4*4=16
  //createEquatation
  case1:
  	given:2,4
  	when:call function createEquatation
  	then:return 2*4=8
  //createMultiplicationTable
  case1:
  	given:2,4
  	when:call function createMultiplicationTable
  	then:return 
  	2*2=4
  	2*3=6 3*3=9
  	2*4=8 3*4=12 4*4=16
  case2:
  	given:5,4
  	when:call function createMultiplicationTable
  	then:return null	
  ```

  

* Please continue doing this work until all the requirement has been fulfilled.

  

