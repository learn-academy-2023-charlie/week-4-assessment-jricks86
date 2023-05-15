# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'

def even_or_odd(number)
  if number% 2 == 0
   p "#{number} is even"

  else 
   p "#{number} is odd"
  end
end

 even_or_odd reposts1

reposts2 = 42
# Expected output: '42 is even'

 even_or_odd reposts2

reposts3 = 221
# Expected output: '221 is odd'

 even_or_odd reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'

def no_vowels string
    p string.delete!("aeiou")
end

no_vowels beatles_album1

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'

no_vowels beatles_album2

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

no_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome_test string
    if string.reverse.downcase == string.downcase
        p string + " is a palindrome"
  else
    p string + " is not a palindrome"
  end   
end


palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'

palindrome_test palindrome_test_case1

palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'

palindrome_test palindrome_test_case2

palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

palindrome_test palindrome_test_case3
