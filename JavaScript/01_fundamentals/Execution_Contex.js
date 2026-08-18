/*  JavaScript Execution Contex

{}  -->  Global  Execution Context

Functional Execution Context

Eval Execution Context


{}  --> Memory Creation Phase
    --> Execution phase

-----------------------------------------------------------------------------------------------
    let val1 = 10
    let val2 = 5
    function addNum(num1, num2){
    let total = num1 + num2
    return total
    }

    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)


1. Global Execution --> this
2. Memory Phase 
   val1 -> undefined
   val2 -> undefined
   addNum -->defination
   result1 --> undefined
   result2 --> undefined

3.Execution phase
  val1 <-- 10
  val2 <-- 5
  addNum --> New environment and execution thread --> Memory phase         ---> then delete 
                                                      val1 --> undefined
                                                      val2 --> undefined
                                                      total --> undefined

                                                      Execution phase
                                                      num1 --> 10
                                                      num2 --> 5
                                                      total --> 15
 result1 --> 15
 result2 --> New environment and execution thread --> memory phase
                                                      val1 --> undefined
                                                      val2 --> undefined
                                                      total --> undefined

                                                      Execution phase
                                                      num1 ---> 10
                                                      num2 --> 2
                                                      total --> 12
result2 = 12






*/