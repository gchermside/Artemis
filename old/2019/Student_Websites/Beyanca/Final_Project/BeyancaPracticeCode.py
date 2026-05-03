print("Hello World!")

#user input lesson apart of class

day=input("Enter the day...")

print("Today is", day)



age=int(input("What is your age?"))

print("I am", age, "years old!" )




hometown=input("What is your hometown?")

print("My hometown is",hometown,"!")



favDessert=input("What is your favorite dessert?")

if favDessert is "ice cream":
    print("Amazing! I like ice cream, too. I was thinking you were going to say apple pie! Ugh.")

else:
    print("What?! Ice cream isn't your favorite dessert? Such unhumanly people in this world...")



#score part of lesson

ht1="Providence"

def hometown():
    ht=input("Enter your hometown:")
    print("You live in",ht)

hometown()


#print("You live in",ht)
print("You live in",ht1)


#comparators

17+1==18
# == means it is checking if 17 is equal to 18. It is not equal so it comes out to false.

20 !=20
# != is checking of 20 is NOT equal to 20. But it IS so it comes out to false. Other symbols like (<,>,=)

if age<20 and age>10:
    let them in
# the and statement is saying if their age fulfills both standards, then they can go to the party.

if age<20 or age>10:
    let them in
# the or statement means that the age has to fulfill at least one of the  standards

if(score1>score2):
    print ("Team 1 is the winner")
else:
    print ("Team 2 is the winner")



#how to carry out an if/else statement(always capitalize the words "true" and "false"

isHungry=True
#change to an if statement

if isHungry == True:
    print("I will eat")
#this is correct because isHungry is true. It will check to see if it is actually true and then print it out

isHungry=False
#if it is false, and you carry out the same function above, it will not print "I will eat".


#another example

isHungry=True

isLunchtime=False

if isHungry == True and isLunchtime == True:
    print ("I will eat my lunch")

else:
    print ("I will wait until lunchtime")

#since only isHungry is true, it will print the first statement. BOTH standards have to be true (isLunchtime has to be true)

isHungry=True

isLunchtime=False

isSnacktime=True

if isHungry == True and isLunchtime == True:
    print ("I will eat my lunch")

elif isSnacktime == True:
    print ("I will eat my snack")

else:
    print ("I will wait until lunchtime or snacktime")

#when you have a third standard, add "elif". 2nd statement will be printed




moreThanOneCookie=True

share=False


if moreThanOneCookie == True:
    print("I am happy")

elif moreThanOneCookie == True and share == True:
    print("I will share the cookies")

elif share == False:
    print("I will be sick from the cookies")

else:
    print("I want some cookies")
