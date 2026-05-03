# -*- coding: iso-8859-1 -*-
#importing the necessary libraries
import random

#Global variables:
#Set to how many matches you want in the pile
total=21
#Max number of matches you can take in a turn
maxToTake=3
    
#This is what your program should do when a game ends. For now, it should just print out to the console whether the player won or lost
#Parameters: 'AITurn' is a boolean that should be set to True if the last turn was the AI's, and false if it was the player's. Alternatively,
#it's fine to change the parameter to 'playerTurn' and have it set to True if the last turn was the player's and false if it was the AI's.
#Return value: None
def endGame(AITurn):
  #TODO: fill in your function here
  
#Check to see if a move is legal. (did the player take at least 1 match and no more than 3? Did the user take more matches than are 
#in the pile?).
#Parameters: 'matches' are the number of matches still in the pile, 'move' is the number of matches the player wants to remove
#Return value: Should return True if the move is legal, false otherwise
def isLegalMove(matches, move):
  #TODO: fill in your function here  
 
#Get and process a user's turn. This is only what happens on a human player turn, not the AI's turn. After you get the user's input, remember  
#to check to make sure it is a legal move.
#Parameters: 'matches' are the number of matches still in the pile
#Return value: The updated number of matches in the pile after the user's turn should be returned
def getUserMove(matches):
  #TODO: fill in your function here
  
#Randomly choose a legal move for the AI to play. Make sure the move you choose is legal.
#Parameters: 'matches' are the number of matches still in the pile
#Return value: The number of matches the AI will remove from the pile
def chooseAIMove(matches):
  #TODO: fill in your function here

#Make a move for the AI and inform the user of that move
#Parameters: 'matches' are the number of matches still in the pile
#Return value: The updated number of matches in the pile after the AI's turn should be returned
def aIMove(matches):
  #TODO: fill in your function here
    
#Plays an individual game to completion. Make sure you know how you will check if the game is done.
#Parameters: None
#Return value: None
def playGame():
  #TODO: fill in your function here
  
#Run your program!
def main():
  #TODO: fill in your function here
  
main()
