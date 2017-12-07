Pig Latin Translator



#### By _Glen Buck and James Donlan_

## Description

This app translates English words or sentences into Pig Latin.

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_



## Specs

|Program does nothing to non alphabetical characters since they do not contain consonants or vowels|    |Input: 3| |output:3|

|Program adds "way" to single letter words that begin with the vowel "i"|
                                |Input:i| |output:iway|

|Program adds "way" to letter words that begin with any vowel|
                                |Input:a| |output:away|

|Program moves first consonant to end of word and add "ay to the end"|
                                |Input:cool| |output:oolcay|

|Program moves all consecutive first consonants to end of the word and adds "ay"| |Input:start| |output:artstay|


|Program moves "u" following a "q" if "q" is the beginning consonant|
                                |input:question| |output:estionqu|


|Program finds words that begin with 2 consecutive consonants and moves those to the end and adds "ay"| |Input: brace| |Output: acebray|


|Program finds words that begin  with three consecutive consonants or more moves the consonants to the end and adds "ay"||Input: strength||output:engthstray|

|Treat "y" as a consonant at the beginning of a word|
                                  |input: yesterday| |output:esterdayyay|

|Perfrom actions on strings containing multiple words|
        |input: yesterday i questioned the word and squealed|
        |output: esterdayay iway estionedquay ethay ordway anday ealedsqu|





## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
