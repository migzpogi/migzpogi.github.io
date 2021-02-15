# In-Place Swapping
Swap two values x and y in-place, without using any helper variables.

```python | swap.py
x = 5
y = 10

x ^= y 
y ^= x
x ^= y
```

* This is [shorthand notation](#code1-l4) for `x = x^y`
* > :Collapse label=short, A short review of bitwise operator (XOR):
> ```
> | x | y | x^y |
> |:-:|:-:|:---:|
> | 0 | 0 |  0  |
> | 0 | 1 |  1  |
> | 1 | 0 |  1  |
> | 1 | 1 |  0  |
> ```
* [Values are](#code1-l4): `x = x^y` -> `x = 5^10` -> `x = 05^10` -> `x = (0^1)(5^0)` -> `x = 15`
* [Values are](#code1-l5): `y = y^x` -> `y = 10^15` -> `y = 10^15` -> `y = (1^1)(0^5)` -> `y = 5`
* [Values are](#code1-l6): `x = x^y` -> `x = 15^5` -> `x = 15^05` -> `x = (1^0)(5^5)` -> `x = 10`
* `x = 10, y = 5`


> :Buttons
> > :Button label=description, url="https://florian.github.io/xor-trick/", icon=true


---
*15-Feb-2021*