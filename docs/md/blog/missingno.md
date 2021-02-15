# Find The Missing Number
You are given an array A of n-1 integers which are in the range between 1 and n. All numbers appear exactly once, except
one number, which is missing. Find this missing number.

```python | missing.py
n = 5
a = [3, 5, 1, 4]

original = list(range(1, n+1)  # [1, 2, 3, 4, 5]
missing = 0
for v in a+orig:  # [3, 5, 1, 4, 1, 2, 3, 4, 5]
  missing ^= v

print(missing)
```
* First we [generate a list of integers](#code1-l4) containing ALL of the numbers from 1 to n.
* We go through each value of the [combined list](#code1-l6) of `a` and `original`. 
* We now remove the duplicates, and the remaining number is the one that is missing. This is achieved by using the 
[XOR](#code1-l7) operator.
* > :Collapse label=short, Why is that?
> ```
> XOR is commutative
>   a ^ b ^ c == c ^ b ^ a
> 
> We can use XOR to remove duplicates
>   a ^ b ^ c ^ b ^ a
>   a ^ a ^ b ^ b ^ c
>   0 ^ 0 ^ c
>   c
> 
> Using our example above
>   3 ^ 5 ^ 1 ^ 4 ^ 1 ^ 2 ^ 3 ^ 4 ^ 5
>   1 ^ 1 ^ 3 ^ 3 ^ 4 ^ 4 ^ 5 ^ 5 ^ 2
>   0 ^ 0 ^ 0 ^ 0 ^ 2
>   2
> ```

> :Buttons
> > :Button label=description, url="https://florian.github.io/xor-trick/", icon=true


---
*15-Feb-2021*