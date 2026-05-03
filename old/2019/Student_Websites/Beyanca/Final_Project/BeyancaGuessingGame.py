#Generate random number

import random
randomNum=random.randint(1,21)

#greeting, name of user and directions
tries=0
name=input("What is your name?")

print("Hello,",name,"!")
print("Today, you will be playing a guessing game in which you have to guess a number in between 1-20.")
print("You will only guess a certain amount of times. I will tell you if your guess is too high or too low.")


#start of guessing game

ready=input("Are you ready to play?")

if ready == "yes":
    print("Awesome!")
    num1=int(input("Guess a number:"))


    while num1 != randomNum and tries != 3: #if the user did not get the right # and didn't run out of tries yet
        if num1<randomNum:
            print("Too low!")
            tries=tries+1  #number of tries increases if user's input is too high AND too low
            num1=int(input("Guess again!"))
        elif num1>randomNum:
            print("Too high!")
            tries=tries + 1
            num1=int(input("Guess again!"))
    if num1 == randomNum:
        print("Yaah! That's what I thought! The number is,", randomNum)
    else:
        print("You ran out of tries!") #when everything tries is equal to 3

else:
    print("That's unfortunate...") #if the user says anything other than yes
