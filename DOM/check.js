// 1. 带有 id="age-table" 的表格。
document.getElementById("age-table");
// 2. 表格内的所有 label 元素
document.getElementsByTagName('label');
// 3. 表格中的第一个 td（带有 "Age" 字段）
document.getElementsByTagName("td")[0];
// 4. 带有 name="search" 的 form。
// 假设文档中只有一个 name="search" 的元素
document.getElementsByName("search")[0]
// 5. 表单中的第一个 input
document.getElementsByTagName("input")[0];
// 6. 表单中的最后一个 input
let input = document.querySelectAll("input")
input[input.length-1]


// 当我们获取到元素的引用后,我们可以通过那个元素引用来重新获取它内部的子元素。
// 这里的table代表的是之前获取到的表格元素。然后我们用 table 作为基准,在它内部搜索 <label> 元素。