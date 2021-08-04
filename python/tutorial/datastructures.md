### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](modules.html '6. Modules') |
- [previous](controlflow.html '4. More Control Flow Tools') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

<span id="tut-structures"></span>

# <span class="section-number">5. </span>Data Structures<a href="#data-structures" class="headerlink" title="Permalink to this headline">¶</a>

This chapter describes some things you’ve learned about already in more detail, and adds some new things as well.

<span id="tut-morelists"></span>

## <span class="section-number">5.1. </span>More on Lists<a href="#more-on-lists" class="headerlink" title="Permalink to this headline">¶</a>

The list data type has some more methods. Here are all of the methods of list objects:

` list.``append `<span class="sig-paren">(</span>_x_<span class="sig-paren">)</span>  
Add an item to the end of the list. Equivalent to `a[len(a):] = [x]`.

` list.``extend `<span class="sig-paren">(</span>_iterable_<span class="sig-paren">)</span>  
Extend the list by appending all the items from the iterable. Equivalent to `a[len(a):] = iterable`.

` list.``insert `<span class="sig-paren">(</span>_i_, _x_<span class="sig-paren">)</span>  
Insert an item at a given position. The first argument is the index of the element before which to insert, so `a.insert(0, x)` inserts at the front of the list, and `a.insert(len(a), x)` is equivalent to `a.append(x)`.

` list.``remove `<span class="sig-paren">(</span>_x_<span class="sig-paren">)</span>  
Remove the first item from the list whose value is equal to _x_. It raises a <a href="https://docs.python.org/3/library/exceptions.html#ValueError" class="reference internal" title="ValueError"><code class="sourceCode python"><span class="pp">ValueError</span></code></a> if there is no such item.

` list.``pop `<span class="sig-paren">(</span><span class="optional">\[</span>_i_<span class="optional">\]</span><span class="sig-paren">)</span>  
Remove the item at the given position in the list, and return it. If no index is specified, `a.pop()` removes and returns the last item in the list. (The square brackets around the _i_ in the method signature denote that the parameter is optional, not that you should type square brackets at that position. You will see this notation frequently in the Python Library Reference.)

` list.``clear `<span class="sig-paren">(</span><span class="sig-paren">)</span>  
Remove all items from the list. Equivalent to `del a[:]`.

` list.``index `<span class="sig-paren">(</span>_x_<span class="optional">\[</span>, _start_<span class="optional">\[</span>, _end_<span class="optional">\]</span><span class="optional">\]</span><span class="sig-paren">)</span>  
Return zero-based index in the list of the first item whose value is equal to _x_. Raises a <a href="https://docs.python.org/3/library/exceptions.html#ValueError" class="reference internal" title="ValueError"><code class="sourceCode python"><span class="pp">ValueError</span></code></a> if there is no such item.

The optional arguments _start_ and _end_ are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the _start_ argument.

` list.``count `<span class="sig-paren">(</span>_x_<span class="sig-paren">)</span>  
Return the number of times _x_ appears in the list.

` list.``sort `<span class="sig-paren">(</span>\*\*_,_ key=None*,* reverse=False\*<span class="sig-paren">)</span>  
Sort the items of the list in place (the arguments can be used for sort customization, see <a href="https://docs.python.org/3/library/functions.html#sorted" class="reference internal" title="sorted"><code class="sourceCode python"><span class="bu">sorted</span>()</code></a> for their explanation).

` list.``reverse `<span class="sig-paren">(</span><span class="sig-paren">)</span>  
Reverse the elements of the list in place.

` list.``copy `<span class="sig-paren">(</span><span class="sig-paren">)</span>  
Return a shallow copy of the list. Equivalent to `a[:]`.

An example that uses most of the list methods:

    >>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
    >>> fruits.count('apple')
    2
    >>> fruits.count('tangerine')
    0
    >>> fruits.index('banana')
    3
    >>> fruits.index('banana', 4)  # Find next banana starting a position 4
    6
    >>> fruits.reverse()
    >>> fruits
    ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']
    >>> fruits.append('grape')
    >>> fruits
    ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']
    >>> fruits.sort()
    >>> fruits
    ['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
    >>> fruits.pop()
    'pear'

You might have noticed that methods like `insert`, `remove` or `sort` that only modify the list have no return value printed – they return the default `None`. <a href="#id2" id="id1" class="footnote-reference brackets">1</a> This is a design principle for all mutable data structures in Python.

Another thing you might notice is that not all data can be sorted or compared. For instance, `[None, 'hello', 10]` doesn’t sort because integers can’t be compared to strings and _None_ can’t be compared to other types. Also, there are some types that don’t have a defined ordering relation. For example, `3+4j < 5+7j` isn’t a valid comparison.

<span id="tut-lists-as-stacks"></span>

### <span class="section-number">5.1.1. </span>Using Lists as Stacks<a href="#using-lists-as-stacks" class="headerlink" title="Permalink to this headline">¶</a>

The list methods make it very easy to use a list as a stack, where the last element added is the first element retrieved (“last-in, first-out”). To add an item to the top of the stack, use `append()`. To retrieve an item from the top of the stack, use `pop()` without an explicit index. For example:

    >>> stack = [3, 4, 5]
    >>> stack.append(6)
    >>> stack.append(7)
    >>> stack
    [3, 4, 5, 6, 7]
    >>> stack.pop()
    7
    >>> stack
    [3, 4, 5, 6]
    >>> stack.pop()
    6
    >>> stack.pop()
    5
    >>> stack
    [3, 4]

<span id="tut-lists-as-queues"></span>

### <span class="section-number">5.1.2. </span>Using Lists as Queues<a href="#using-lists-as-queues" class="headerlink" title="Permalink to this headline">¶</a>

It is also possible to use a list as a queue, where the first element added is the first element retrieved (“first-in, first-out”); however, lists are not efficient for this purpose. While appends and pops from the end of list are fast, doing inserts or pops from the beginning of a list is slow (because all of the other elements have to be shifted by one).

To implement a queue, use <a href="https://docs.python.org/3/library/collections.html#collections.deque" class="reference internal" title="collections.deque"><code class="sourceCode python">collections.deque</code></a> which was designed to have fast appends and pops from both ends. For example:

    >>> from collections import deque
    >>> queue = deque(["Eric", "John", "Michael"])
    >>> queue.append("Terry")           # Terry arrives
    >>> queue.append("Graham")          # Graham arrives
    >>> queue.popleft()                 # The first to arrive now leaves
    'Eric'
    >>> queue.popleft()                 # The second to arrive now leaves
    'John'
    >>> queue                           # Remaining queue in order of arrival
    deque(['Michael', 'Terry', 'Graham'])

<span id="tut-listcomps"></span>

### <span class="section-number">5.1.3. </span>List Comprehensions<a href="#list-comprehensions" class="headerlink" title="Permalink to this headline">¶</a>

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.

For example, assume we want to create a list of squares, like:

    >>> squares = []
    >>> for x in range(10):
    ...     squares.append(x**2)
    ...
    >>> squares
    [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

Note that this creates (or overwrites) a variable named `x` that still exists after the loop completes. We can calculate the list of squares without any side effects using:

    squares = list(map(lambda x: x**2, range(10)))

or, equivalently:

    squares = [x**2 for x in range(10)]

which is more concise and readable.

A list comprehension consists of brackets containing an expression followed by a `for` clause, then zero or more `for` or `if` clauses. The result will be a new list resulting from evaluating the expression in the context of the `for` and `if` clauses which follow it. For example, this listcomp combines the elements of two lists if they are not equal:

    >>> [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
    [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

and it’s equivalent to:

    >>> combs = []
    >>> for x in [1,2,3]:
    ...     for y in [3,1,4]:
    ...         if x != y:
    ...             combs.append((x, y))
    ...
    >>> combs
    [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

Note how the order of the <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> and <a href="https://docs.python.org/3/reference/compound_stmts.html#if" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">if</code></a> statements is the same in both these snippets.

If the expression is a tuple (e.g. the `(x, y)` in the previous example), it must be parenthesized.

    >>> vec = [-4, -2, 0, 2, 4]
    >>> # create a new list with the values doubled
    >>> [x*2 for x in vec]
    [-8, -4, 0, 4, 8]
    >>> # filter the list to exclude negative numbers
    >>> [x for x in vec if x >= 0]
    [0, 2, 4]
    >>> # apply a function to all the elements
    >>> [abs(x) for x in vec]
    [4, 2, 0, 2, 4]
    >>> # call a method on each element
    >>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
    >>> [weapon.strip() for weapon in freshfruit]
    ['banana', 'loganberry', 'passion fruit']
    >>> # create a list of 2-tuples like (number, square)
    >>> [(x, x**2) for x in range(6)]
    [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
    >>> # the tuple must be parenthesized, otherwise an error is raised
    >>> [x, x**2 for x in range(6)]
      File "<stdin>", line 1, in <module>
        [x, x**2 for x in range(6)]
                   ^
    SyntaxError: invalid syntax
    >>> # flatten a list using a listcomp with two 'for'
    >>> vec = [[1,2,3], [4,5,6], [7,8,9]]
    >>> [num for elem in vec for num in elem]
    [1, 2, 3, 4, 5, 6, 7, 8, 9]

List comprehensions can contain complex expressions and nested functions:

    >>> from math import pi
    >>> [str(round(pi, i)) for i in range(1, 6)]
    ['3.1', '3.14', '3.142', '3.1416', '3.14159']

### <span class="section-number">5.1.4. </span>Nested List Comprehensions<a href="#nested-list-comprehensions" class="headerlink" title="Permalink to this headline">¶</a>

The initial expression in a list comprehension can be any arbitrary expression, including another list comprehension.

Consider the following example of a 3x4 matrix implemented as a list of 3 lists of length 4:

    >>> matrix = [
    ...     [1, 2, 3, 4],
    ...     [5, 6, 7, 8],
    ...     [9, 10, 11, 12],
    ... ]

The following list comprehension will transpose rows and columns:

    >>> [[row[i] for row in matrix] for i in range(4)]
    [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

As we saw in the previous section, the nested listcomp is evaluated in the context of the <a href="https://docs.python.org/3/reference/compound_stmts.html#for" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">for</code></a> that follows it, so this example is equivalent to:

    >>> transposed = []
    >>> for i in range(4):
    ...     transposed.append([row[i] for row in matrix])
    ...
    >>> transposed
    [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

which, in turn, is the same as:

    >>> transposed = []
    >>> for i in range(4):
    ...     # the following 3 lines implement the nested listcomp
    ...     transposed_row = []
    ...     for row in matrix:
    ...         transposed_row.append(row[i])
    ...     transposed.append(transposed_row)
    ...
    >>> transposed
    [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

In the real world, you should prefer built-in functions to complex flow statements. The <a href="https://docs.python.org/3/library/functions.html#zip" class="reference internal" title="zip"><code class="sourceCode python"><span class="bu">zip</span>()</code></a> function would do a great job for this use case:

    >>> list(zip(*matrix))
    [(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]

See <a href="controlflow.html#tut-unpacking-arguments" class="reference internal"><span class="std std-ref">Unpacking Argument Lists</span></a> for details on the asterisk in this line.

<span id="tut-del"></span>

## <span class="section-number">5.2. </span>The `del` statement<a href="#the-del-statement" class="headerlink" title="Permalink to this headline">¶</a>

There is a way to remove an item from a list given its index instead of its value: the <a href="https://docs.python.org/3/reference/simple_stmts.html#del" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">del</code></a> statement. This differs from the `pop()` method which returns a value. The `del` statement can also be used to remove slices from a list or clear the entire list (which we did earlier by assignment of an empty list to the slice). For example:

    >>> a = [-1, 1, 66.25, 333, 333, 1234.5]
    >>> del a[0]
    >>> a
    [1, 66.25, 333, 333, 1234.5]
    >>> del a[2:4]
    >>> a
    [1, 66.25, 1234.5]
    >>> del a[:]
    >>> a
    []

<a href="https://docs.python.org/3/reference/simple_stmts.html#del" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">del</code></a> can also be used to delete entire variables:

    >>> del a

Referencing the name `a` hereafter is an error (at least until another value is assigned to it). We’ll find other uses for <a href="https://docs.python.org/3/reference/simple_stmts.html#del" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">del</code></a> later.

<span id="tut-tuples"></span>

## <span class="section-number">5.3. </span>Tuples and Sequences<a href="#tuples-and-sequences" class="headerlink" title="Permalink to this headline">¶</a>

We saw that lists and strings have many common properties, such as indexing and slicing operations. They are two examples of _sequence_ data types (see <a href="https://docs.python.org/3/library/stdtypes.html#typesseq" class="reference internal"><span class="std std-ref">Sequence Types — list, tuple, range</span></a>). Since Python is an evolving language, other sequence data types may be added. There is also another standard sequence data type: the _tuple_.

A tuple consists of a number of values separated by commas, for instance:

    >>> t = 12345, 54321, 'hello!'
    >>> t[0]
    12345
    >>> t
    (12345, 54321, 'hello!')
    >>> # Tuples may be nested:
    ... u = t, (1, 2, 3, 4, 5)
    >>> u
    ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
    >>> # Tuples are immutable:
    ... t[0] = 88888
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'tuple' object does not support item assignment
    >>> # but they can contain mutable objects:
    ... v = ([1, 2, 3], [3, 2, 1])
    >>> v
    ([1, 2, 3], [3, 2, 1])

As you see, on output tuples are always enclosed in parentheses, so that nested tuples are interpreted correctly; they may be input with or without surrounding parentheses, although often parentheses are necessary anyway (if the tuple is part of a larger expression). It is not possible to assign to the individual items of a tuple, however it is possible to create tuples which contain mutable objects, such as lists.

Though tuples may seem similar to lists, they are often used in different situations and for different purposes. Tuples are <a href="https://docs.python.org/3/glossary.html#term-immutable" class="reference internal"><span class="xref std std-term">immutable</span></a>, and usually contain a heterogeneous sequence of elements that are accessed via unpacking (see later in this section) or indexing (or even by attribute in the case of <a href="https://docs.python.org/3/library/collections.html#collections.namedtuple" class="reference internal" title="collections.namedtuple"><code class="sourceCode python">namedtuples</code></a>). Lists are <a href="https://docs.python.org/3/glossary.html#term-mutable" class="reference internal"><span class="xref std std-term">mutable</span></a>, and their elements are usually homogeneous and are accessed by iterating over the list.

A special problem is the construction of tuples containing 0 or 1 items: the syntax has some extra quirks to accommodate these. Empty tuples are constructed by an empty pair of parentheses; a tuple with one item is constructed by following a value with a comma (it is not sufficient to enclose a single value in parentheses). Ugly, but effective. For example:

    >>> empty = ()
    >>> singleton = 'hello',    # <-- note trailing comma
    >>> len(empty)
    0
    >>> len(singleton)
    1
    >>> singleton
    ('hello',)

The statement `t = 12345, 54321, 'hello!'` is an example of _tuple packing_: the values `12345`, `54321` and `'hello!'` are packed together in a tuple. The reverse operation is also possible:

    >>> x, y, z = t

This is called, appropriately enough, _sequence unpacking_ and works for any sequence on the right-hand side. Sequence unpacking requires that there are as many variables on the left side of the equals sign as there are elements in the sequence. Note that multiple assignment is really just a combination of tuple packing and sequence unpacking.

<span id="tut-sets"></span>

## <span class="section-number">5.4. </span>Sets<a href="#sets" class="headerlink" title="Permalink to this headline">¶</a>

Python also includes a data type for _sets_. A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries. Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

Curly braces or the <a href="https://docs.python.org/3/library/stdtypes.html#set" class="reference internal" title="set"><code class="sourceCode python"><span class="bu">set</span>()</code></a> function can be used to create sets. Note: to create an empty set you have to use `set()`, not `{}`; the latter creates an empty dictionary, a data structure that we discuss in the next section.

Here is a brief demonstration:

    >>> basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
    >>> print(basket)                      # show that duplicates have been removed
    {'orange', 'banana', 'pear', 'apple'}
    >>> 'orange' in basket                 # fast membership testing
    True
    >>> 'crabgrass' in basket
    False

    >>> # Demonstrate set operations on unique letters from two words
    ...
    >>> a = set('abracadabra')
    >>> b = set('alacazam')
    >>> a                                  # unique letters in a
    {'a', 'r', 'b', 'c', 'd'}
    >>> a - b                              # letters in a but not in b
    {'r', 'd', 'b'}
    >>> a | b                              # letters in a or b or both
    {'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
    >>> a & b                              # letters in both a and b
    {'a', 'c'}
    >>> a ^ b                              # letters in a or b but not both
    {'r', 'd', 'b', 'm', 'z', 'l'}

Similarly to <a href="#tut-listcomps" class="reference internal"><span class="std std-ref">list comprehensions</span></a>, set comprehensions are also supported:

    >>> a = {x for x in 'abracadabra' if x not in 'abc'}
    >>> a
    {'r', 'd'}

<span id="tut-dictionaries"></span>

## <span class="section-number">5.5. </span>Dictionaries<a href="#dictionaries" class="headerlink" title="Permalink to this headline">¶</a>

Another useful data type built into Python is the _dictionary_ (see <a href="https://docs.python.org/3/library/stdtypes.html#typesmapping" class="reference internal"><span class="std std-ref">Mapping Types — dict</span></a>). Dictionaries are sometimes found in other languages as “associative memories” or “associative arrays”. Unlike sequences, which are indexed by a range of numbers, dictionaries are indexed by _keys_, which can be any immutable type; strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. You can’t use lists as keys, since lists can be modified in place using index assignments, slice assignments, or methods like `append()` and `extend()`.

It is best to think of a dictionary as a set of _key: value_ pairs, with the requirement that the keys are unique (within one dictionary). A pair of braces creates an empty dictionary: `{}`. Placing a comma-separated list of key:value pairs within the braces adds initial key:value pairs to the dictionary; this is also the way dictionaries are written on output.

The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key:value pair with `del`. If you store using a key that is already in use, the old value associated with that key is forgotten. It is an error to extract a value using a non-existent key.

Performing `list(d)` on a dictionary returns a list of all the keys used in the dictionary, in insertion order (if you want it sorted, just use `sorted(d)` instead). To check whether a single key is in the dictionary, use the <a href="https://docs.python.org/3/reference/expressions.html#in" class="reference internal"><code class="xref std std-keyword docutils literal notranslate">in</code></a> keyword.

Here is a small example using a dictionary:

    >>> tel = {'jack': 4098, 'sape': 4139}
    >>> tel['guido'] = 4127
    >>> tel
    {'jack': 4098, 'sape': 4139, 'guido': 4127}
    >>> tel['jack']
    4098
    >>> del tel['sape']
    >>> tel['irv'] = 4127
    >>> tel
    {'jack': 4098, 'guido': 4127, 'irv': 4127}
    >>> list(tel)
    ['jack', 'guido', 'irv']
    >>> sorted(tel)
    ['guido', 'irv', 'jack']
    >>> 'guido' in tel
    True
    >>> 'jack' not in tel
    False

The <a href="https://docs.python.org/3/library/stdtypes.html#dict" class="reference internal" title="dict"><code class="sourceCode python"><span class="bu">dict</span>()</code></a> constructor builds dictionaries directly from sequences of key-value pairs:

    >>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
    {'sape': 4139, 'guido': 4127, 'jack': 4098}

In addition, dict comprehensions can be used to create dictionaries from arbitrary key and value expressions:

    >>> {x: x**2 for x in (2, 4, 6)}
    {2: 4, 4: 16, 6: 36}

When the keys are simple strings, it is sometimes easier to specify pairs using keyword arguments:

    >>> dict(sape=4139, guido=4127, jack=4098)
    {'sape': 4139, 'guido': 4127, 'jack': 4098}

<span id="tut-loopidioms"></span>

## <span class="section-number">5.6. </span>Looping Techniques<a href="#looping-techniques" class="headerlink" title="Permalink to this headline">¶</a>

When looping through dictionaries, the key and corresponding value can be retrieved at the same time using the `items()` method.

    >>> knights = {'gallahad': 'the pure', 'robin': 'the brave'}
    >>> for k, v in knights.items():
    ...     print(k, v)
    ...
    gallahad the pure
    robin the brave

When looping through a sequence, the position index and corresponding value can be retrieved at the same time using the <a href="https://docs.python.org/3/library/functions.html#enumerate" class="reference internal" title="enumerate"><code class="sourceCode python"><span class="bu">enumerate</span>()</code></a> function.

    >>> for i, v in enumerate(['tic', 'tac', 'toe']):
    ...     print(i, v)
    ...
    0 tic
    1 tac
    2 toe

To loop over two or more sequences at the same time, the entries can be paired with the <a href="https://docs.python.org/3/library/functions.html#zip" class="reference internal" title="zip"><code class="sourceCode python"><span class="bu">zip</span>()</code></a> function.

    >>> questions = ['name', 'quest', 'favorite color']
    >>> answers = ['lancelot', 'the holy grail', 'blue']
    >>> for q, a in zip(questions, answers):
    ...     print('What is your {0}?  It is {1}.'.format(q, a))
    ...
    What is your name?  It is lancelot.
    What is your quest?  It is the holy grail.
    What is your favorite color?  It is blue.

To loop over a sequence in reverse, first specify the sequence in a forward direction and then call the <a href="https://docs.python.org/3/library/functions.html#reversed" class="reference internal" title="reversed"><code class="sourceCode python"><span class="bu">reversed</span>()</code></a> function.

    >>> for i in reversed(range(1, 10, 2)):
    ...     print(i)
    ...
    9
    7
    5
    3
    1

To loop over a sequence in sorted order, use the <a href="https://docs.python.org/3/library/functions.html#sorted" class="reference internal" title="sorted"><code class="sourceCode python"><span class="bu">sorted</span>()</code></a> function which returns a new sorted list while leaving the source unaltered.

    >>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
    >>> for i in sorted(basket):
    ...     print(i)
    ...
    apple
    apple
    banana
    orange
    orange
    pear

Using <a href="https://docs.python.org/3/library/stdtypes.html#set" class="reference internal" title="set"><code class="sourceCode python"><span class="bu">set</span>()</code></a> on a sequence eliminates duplicate elements. The use of <a href="https://docs.python.org/3/library/functions.html#sorted" class="reference internal" title="sorted"><code class="sourceCode python"><span class="bu">sorted</span>()</code></a> in combination with <a href="https://docs.python.org/3/library/stdtypes.html#set" class="reference internal" title="set"><code class="sourceCode python"><span class="bu">set</span>()</code></a> over a sequence is an idiomatic way to loop over unique elements of the sequence in sorted order.

    >>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
    >>> for f in sorted(set(basket)):
    ...     print(f)
    ...
    apple
    banana
    orange
    pear

It is sometimes tempting to change a list while you are looping over it; however, it is often simpler and safer to create a new list instead.

    >>> import math
    >>> raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
    >>> filtered_data = []
    >>> for value in raw_data:
    ...     if not math.isnan(value):
    ...         filtered_data.append(value)
    ...
    >>> filtered_data
    [56.2, 51.7, 55.3, 52.5, 47.8]

<span id="tut-conditions"></span>

## <span class="section-number">5.7. </span>More on Conditions<a href="#more-on-conditions" class="headerlink" title="Permalink to this headline">¶</a>

The conditions used in `while` and `if` statements can contain any operators, not just comparisons.

The comparison operators `in` and `not in` check whether a value occurs (does not occur) in a sequence. The operators `is` and `is not` compare whether two objects are really the same object. All comparison operators have the same priority, which is lower than that of all numerical operators.

Comparisons can be chained. For example, `a < b == c` tests whether `a` is less than `b` and moreover `b` equals `c`.

Comparisons may be combined using the Boolean operators `and` and `or`, and the outcome of a comparison (or of any other Boolean expression) may be negated with `not`. These have lower priorities than comparison operators; between them, `not` has the highest priority and `or` the lowest, so that `A and not B or C` is equivalent to `(A and (not B)) or C`. As always, parentheses can be used to express the desired composition.

The Boolean operators `and` and `or` are so-called _short-circuit_ operators: their arguments are evaluated from left to right, and evaluation stops as soon as the outcome is determined. For example, if `A` and `C` are true but `B` is false, `A and B and C` does not evaluate the expression `C`. When used as a general value and not as a Boolean, the return value of a short-circuit operator is the last evaluated argument.

It is possible to assign the result of a comparison or other Boolean expression to a variable. For example,

    >>> string1, string2, string3 = '', 'Trondheim', 'Hammer Dance'
    >>> non_null = string1 or string2 or string3
    >>> non_null
    'Trondheim'

Note that in Python, unlike C, assignment inside expressions must be done explicitly with the <a href="https://docs.python.org/3/faq/design.html#why-can-t-i-use-an-assignment-in-an-expression" class="reference internal"><span class="std std-ref">walrus operator</span></a> `:=`. This avoids a common class of problems encountered in C programs: typing `=` in an expression when `==` was intended.

<span id="tut-comparing"></span>

## <span class="section-number">5.8. </span>Comparing Sequences and Other Types<a href="#comparing-sequences-and-other-types" class="headerlink" title="Permalink to this headline">¶</a>

Sequence objects typically may be compared to other objects with the same sequence type. The comparison uses _lexicographical_ ordering: first the first two items are compared, and if they differ this determines the outcome of the comparison; if they are equal, the next two items are compared, and so on, until either sequence is exhausted. If two items to be compared are themselves sequences of the same type, the lexicographical comparison is carried out recursively. If all items of two sequences compare equal, the sequences are considered equal. If one sequence is an initial sub-sequence of the other, the shorter sequence is the smaller (lesser) one. Lexicographical ordering for strings uses the Unicode code point number to order individual characters. Some examples of comparisons between sequences of the same type:

    (1, 2, 3)              < (1, 2, 4)
    [1, 2, 3]              < [1, 2, 4]
    'ABC' < 'C' < 'Pascal' < 'Python'
    (1, 2, 3, 4)           < (1, 2, 4)
    (1, 2)                 < (1, 2, -1)
    (1, 2, 3)             == (1.0, 2.0, 3.0)
    (1, 2, ('aa', 'ab'))   < (1, 2, ('abc', 'a'), 4)

Note that comparing objects of different types with `<` or `>` is legal provided that the objects have appropriate comparison methods. For example, mixed numeric types are compared according to their numeric value, so 0 equals 0.0, etc. Otherwise, rather than providing an arbitrary ordering, the interpreter will raise a <a href="https://docs.python.org/3/library/exceptions.html#TypeError" class="reference internal" title="TypeError"><code class="sourceCode python"><span class="pp">TypeError</span></code></a> exception.

Footnotes

<span class="brackets"><a href="#id1" class="fn-backref">1</a></span>  
Other languages may return the mutated object, which allows method chaining, such as `d->insert("a")->remove("b")->sort();`.

### [Table of Contents](https://docs.python.org/3/contents.html)

- <a href="#" class="reference internal">5. Data Structures</a>
  - <a href="#more-on-lists" class="reference internal">5.1. More on Lists</a>
    - <a href="#using-lists-as-stacks" class="reference internal">5.1.1. Using Lists as Stacks</a>
    - <a href="#using-lists-as-queues" class="reference internal">5.1.2. Using Lists as Queues</a>
    - <a href="#list-comprehensions" class="reference internal">5.1.3. List Comprehensions</a>
    - <a href="#nested-list-comprehensions" class="reference internal">5.1.4. Nested List Comprehensions</a>
  - <a href="#the-del-statement" class="reference internal">5.2. The <code class="xref std std-keyword docutils literal notranslate">del</code> statement</a>
  - <a href="#tuples-and-sequences" class="reference internal">5.3. Tuples and Sequences</a>
  - <a href="#sets" class="reference internal">5.4. Sets</a>
  - <a href="#dictionaries" class="reference internal">5.5. Dictionaries</a>
  - <a href="#looping-techniques" class="reference internal">5.6. Looping Techniques</a>
  - <a href="#more-on-conditions" class="reference internal">5.7. More on Conditions</a>
  - <a href="#comparing-sequences-and-other-types" class="reference internal">5.8. Comparing Sequences and Other Types</a>

#### Previous topic

[<span class="section-number">4. </span>More Control Flow Tools](controlflow.html 'previous chapter')

#### Next topic

[<span class="section-number">6. </span>Modules](modules.html 'next chapter')

### This Page

- [Report a Bug](https://docs.python.org/3/bugs.html)
- [Show Source](https://github.com/python/cpython/blob/3.9/Doc/tutorial/datastructures.rst)

### Navigation

- [index](https://docs.python.org/3/genindex.html 'General Index')
- [modules](https://docs.python.org/3/py-modindex.html 'Python Module Index') |
- [next](modules.html '6. Modules') |
- [previous](controlflow.html '4. More Control Flow Tools') |
- ![](../_static/py.png)
- [Python](https://www.python.org/) »
- [3.9.5 Documentation](https://docs.python.org/3/index.html) »
- [The Python Tutorial](index.html) »
-

Last updated on May 30, 2021. [Found a bug](https://docs.python.org/3/bugs.html)?  
Created using [Sphinx](https://www.sphinx-doc.org/) 2.4.4.
