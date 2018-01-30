# Pipe usages

* ProductComponent and CartComponent have currency pipe in template
* CartComponent has date pipe
* ProductComponent has uppercase pipe
* CartComponent has async and number pipes to show hot offer count down.
* Added custom pipe orderBy to sort arrays by fields. You may set deep fields (i.e. productItem.price -> sort by price field inside productItem field of current array item)
* Templates of ProductListComponent and CartListComponent have the orderBy pipe
