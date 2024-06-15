% ===== facts =====

parent(john, mary).
parent(mary, susan).
parent(mary, james).
parent(susan, anna).
parent(james, johnny).

% ===== rules =====

% A rule that defines a grandparent relationship
grandparent(X, Y) :-
    parent(X, Z),
    parent(Z, Y).

% A rule that defines an ancestor relationship
ancestor(X, Y) :-
    parent(X, Y).
ancestor(X, Y) :-
    parent(X, Z),
    ancestor(Z, Y).

% ===== queries =====

% Query: Who are the parents of Mary?
?- parent(X, mary).

% Query: Who are the children of Mary?
?- parent(mary, X).

% Query: Who are the grandparents of Anna?
?- grandparent(X, anna).