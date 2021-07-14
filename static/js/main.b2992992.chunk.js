(this.webpackJsonp100daysofcode=this.webpackJsonp100daysofcode||[]).push([[0],[,,,,,function(e,t,n){e.exports={Header:"Problem_Header__2h2Dp",CardBody:"Problem_CardBody__2AJLd",ProblemStatement:"Problem_ProblemStatement__372JX",StatementTitle:"Problem_StatementTitle__3dDT0",StatementText:"Problem_StatementText__2b_CE",ExampleText:"Problem_ExampleText__XquOl",ExampleInput:"Problem_ExampleInput__2NfS1",ExampleOutput:"Problem_ExampleOutput__2XyNq",Image:"Problem_Image__2KOHE"}},,,function(e,t,n){e.exports={Heading:"Home_Heading__3OBVo",CardHeader:"Home_CardHeader__1IY_S",HeadingYear:"Home_HeadingYear__1fTdE",ProblemDate:"Home_ProblemDate__3A7Km",Column:"Home_Column__3PFyj",Text:"Home_Text__2tV1E",ProblemIndex:"Home_ProblemIndex__Nvy8j",ProblemName:"Home_ProblemName__1lYK7"}},,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"0","day":"Day : 1","date":"10 June 21","platform":"LeetCode","problems":[{"index":"1","problem":"Two Sum","variant":"primary","action":true},{"index":"217","problem":"Contains Duplicate","variant":"success","action":true},{"index":"121","problem":"Best Time to Buy and Sell Stock","variant":"danger","action":true},{"index":"242","problem":"Valid Anagram","variant":"warning","action":false}]},{"id":"1","day":"Day : 2","date":"11 June 21","platform":"LeetCode","problems":[{"index":"11","problem":"Container With Most Water","variant":"primary","action":true},{"index":"56","problem":"Merge Intervals","variant":"success","action":true},{"index":"","problem":"","variant":"danger","action":false},{"index":"","problem":"","variant":"warning","action":false}]},{"id":"3","day":"Day : 3","date":"12 June 21","platform":"LeetCode","problems":[{"index":"57","problem":"Insert Interval","variant":"primary","action":true},{"index":"435","problem":"Non-overlapping Intervals","variant":"success","action":true},{"index":"73","problem":"Set Matrix Zeroes","variant":"danger","action":true},{"index":"48","problem":"Rotate Image","variant":"warning","action":false}]},{"id":"4","day":"Day : 4","date":"13 June 21","platform":"LeetCode","problems":[{"index":"54","problem":"Spiral Matrix","variant":"primary"},{"index":"1047","problem":"Remove All Adjacent Duplicates In String","variant":"success"},{"index":"496","problem":"Next Greater Element I","variant":"danger","action":true},{"index":"","problem":"","variant":"warning","action":false}]},{"id":"5","day":"Day : 5","date":"14 June 21","platform":"LeetCode","problems":[{"index":"20","problem":"Valid Parentheses","variant":"primary"},{"index":"53","problem":"Maximum Subarray","variant":"success"},{"index":"42","problem":"Trapping Rain Water","variant":"danger"}]}]')},function(e){e.exports=JSON.parse('[{"id":"0","index":"1","title":"Two Sum","level":"easy","statements":[{"id":"0","statement":"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."},{"id":"1","statement":"You may assume that each input would have exactly one solution, and you may not use the same element twice."},{"id":"2","statement":"You can return the answer in any order."}],"examples":[{"id":"1","example":[{"input":"nums = [2,7,11,15], target = 9","output":"[0,1]"}]},{"id":"2","example":[{"input":"nums = [3,2,4], target = 6","output":"[1,2]"}]},{"id":"3","example":[{"input":"nums = [3,3], target = 6","output":"[0,1]"}]}],"constraints":[{"constraint":"2 <= nums.length <= 10^4"},{"constraint":"-10^9 <= nums[i] <= 10^9"},{"constraint":"-10^9 <= target <= 10^9"},{"constraint":"Only one valid answer exists."}],"followup":"Can you come up with an algorithm that is less than O(n^2) time complexity?","tags":["Array"," | ","Hash Table"],"url":"https://leetcode.com/problems/two-sum/","solutionImg":"1.png"},{"id":"1","index":"217","title":"Contains Duplicate","level":"easy","statements":[{"id":"0","statement":"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."}],"examples":[{"id":"1","example":[{"input":"nums = [1,2,3,1]","output":"true"}]},{"id":"2","example":[{"input":"nums = [1,2,3,4]","output":"false"}]},{"id":"3","example":[{"input":"nums = [1,1,1,3,3,4,3,2,4,2]","output":"true"}]}],"constraints":[{"constraint":"1 <= nums.length <= 10^5"},{"constraint":"-10^9 <= nums[i] <= 10^9"}],"followup":"","tags":["Array"," | ","Hash Table"," | ","Sorting"],"url":"https://leetcode.com/problems/contains-duplicate/","solutionImg":"1.png"},{"id":"2","index":"121","title":"Best Time to Buy and Sell Stock","level":"easy","statements":[{"id":"0","statement":"You are given an array prices where prices[i] is the price of a given stock on the ith day."},{"id":"1","statement":"You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock."},{"id":"2","statement":"Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."}],"examples":[{"id":"1","example":[{"input":"prices = [7,1,5,3,6,4]","output":"5"}]},{"id":"2","example":[{"input":"prices = [7,6,4,3,1]","output":"0"}]}],"constraints":[{"constraint":"1 <= prices.length <= 10^5"},{"constraint":"-0 <= prices[i] <= 10^4"}],"followup":"","tags":["Array"," | ","Dynamic Programming"],"url":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/","solutionImg":"121.png"},{"id":"3","index":"242","title":"Valid Anagram","level":"easy","statements":[{"id":"0","statement":"Given two strings s and t, return true if t is an anagram of s, and false otherwise."}],"examples":[{"id":"1","example":[{"input":"s = \'anagram\', t = \'nagaram\'","output":"true"}]},{"id":"2","example":[{"input":"s = \'rat\', t = \'car\'","output":"false"}]}],"constraints":[{"constraint":"1 <= s.length, t.length <= 5 * 10^4"},{"constraint":"s and t consist of lowercase English letters."}],"followup":"What if the inputs contain Unicode characters? How would you adapt your solution to such a case?","tags":["Hash Table"," | ","Hash Table"," | ","String"],"url":"https://leetcode.com/problems/valid-anagram/","solutionImg":"242.png"},{"id":"4","index":"20","title":"Valid Parentheses","level":"easy","statements":[{"id":"0","statement":"Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid."},{"id":"1","statement":"An input string is valid if:"},{"id":"2","statement":"1. Open brackets must be closed by the same type of brackets."},{"id":"3","statement":"2. Open brackets must be closed in the correct order."}],"examples":[{"id":"1","example":[{"input":"()","output":"true"}]},{"id":"2","example":[{"input":"()[]{}","output":"true"}]},{"id":"3","example":[{"input":"(]","output":"false"}]}],"constraints":[{"constraint":"1 <= s.length <= 10^4"},{"constraint":"s consists of parentheses only \'()[]{}\'"}],"followup":"","tags":["String"," | ","Stack"],"url":"https://leetcode.com/problems/valid-parentheses/","solutionImg":"20.png"},{"id":"5","index":"53","title":"Maximum Subarray","level":"easy","statements":[{"id":"0","statement":"Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum."}],"examples":[{"id":"1","example":[{"input":"nums = [-2,1,-3,4,-1,2,1,-5,4]","output":"6"}]},{"id":"2","example":[{"input":"nums = [1]","output":"1"}]},{"id":"3","example":[{"input":"nums = [5,4,-1,7,8]","output":"23"}]}],"constraints":[{"constraint":"1 <= nums.length <= 3 * 10^4"},{"constraint":"-10^5 <= nums[i] <= 10^5"}],"followup":"If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.","tags":["Array"," | ","Divide and Conquer"," | ","Dynamic Programming"],"url":"https://leetcode.com/problems/maximum-subarray/","solutionImg":"53.png"},{"id":"6","index":"238","title":"Product of Array Except Self","level":"Medium","statements":[{"id":"0","statement":"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]"},{"id":"1","statement":"The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."},{"id":"2","statement":"You must write an algorithm that runs in O(n) time and without using the division operation."}],"examples":[{"id":"1","example":[{"input":"nums = [1,2,3,4]","output":"[24,12,8,6]"}]},{"id":"2","example":[{"input":"nums = [-1,1,0,-3,3]","output":"[0,0,9,0,0]"}]}],"constraints":[{"constraint":"2 <= nums.length <= 10^5"},{"constraint":"-30 <= nums[i] <= 30"},{"constraint":"The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."}],"followup":"Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)","tags":["Array"," | ","Prefix Sum"],"url":"https://leetcode.com/problems/product-of-array-except-self/","solutionImg":"238.png"},{"id":"7","index":"15","title":"3Sum","level":"Medium","statements":[{"id":"0","statement":"Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0."},{"id":"1","statement":"Notice that the solution set must not contain duplicate triplets."}],"examples":[{"id":"1","example":[{"input":"nums = [-1,0,1,2,-1,-4]","output":"[[-1,-1,2],[-1,0,1]]"}]},{"id":"2","example":[{"input":"nums = []","output":"[]"}]},{"id":"3","example":[{"input":"nums = [0]","output":"[]"}]}],"constraints":[{"constraint":"0 <= nums.length <= 3000"},{"constraint":"-105 <= nums[i] <= 105"}],"followup":"","tags":["Array"," | ","Two  Pointers"," | ","Sorting"],"url":"https://leetcode.com/problems/3sum/","solutionImg":"15.png"},{"id":"8","index":"11","title":"Container With Most Water","level":"Medium","statements":[{"id":"0","statement":"Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water."},{"id":"1","statement":"Notice that you may not slant the container."}],"examples":[{"id":"1","example":[{"input":"height = [1,8,6,2,5,4,8,3,7]","output":"49"}]},{"id":"2","example":[{"input":"height = [1,1]","output":"1"}]},{"id":"3","example":[{"input":"height = [4,3,2,1,4]","output":"16"}]}],"constraints":[{"constraint":"n == height.length"},{"constraint":"2 <= n <= 10^5"},{"constraint":"0 <= height[i] <= 10^4"}],"followup":"","tags":["Array"," | ","Two Pointers"],"url":"https://leetcode.com/problems/container-with-most-water/","solutionImg":"11.png"},{"id":"9","index":"56","title":"Merge Intervals","level":"Medium","statements":[{"id":"0","statement":"Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input."}],"examples":[{"id":"1","example":[{"input":"intervals = [[1,3],[2,6],[8,10],[15,18]]","output":"[[1,6],[8,10],[15,18]]"}]},{"id":"2","example":[{"input":"intervals = [[1,4],[4,5]]","output":"[[1,5]]"}]}],"constraints":[{"constraint":"1 <= intervals.length <= 10^4"},{"constraint":"intervals[i].length == 2"},{"constraint":"0 <= starti <= endi <= 10^4"}],"followup":"Can you come up with an algorithm that is less than O(n^2) time complexity?","tags":["Array"," | ","Sorting"],"url":"https://leetcode.com/problems/merge-intervals/","solutionImg":"56.png"},{"id":"10","index":"57","title":"Insert Interval","level":"Medium","statements":[{"id":"0","statement":"Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary)."},{"id":"1","statement":"You may assume that the intervals were initially sorted according to their start times."}],"examples":[{"id":"1","example":[{"input":"intervals = [[1,3],[6,9]], newInterval = [2,5]","output":"[[1,5],[6,9]]"}]},{"id":"2","example":[{"input":"intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]","output":"[[1,2],[3,10],[12,16]]"}]},{"id":"3","example":[{"input":"intervals = [], newInterval = [5,7]","output":"[[5,7]]]"}]}],"constraints":[{"constraint":"0 <= intervals.length <= 10^4"},{"constraint":"intervals[i].length == 2"},{"constraint":"0 <= intervals[i][0] <= intervals[i][1] <= 10^5"},{"constraint":"intervals is sorted by intervals[i][0] in ascending order."},{"constraint":"newInterval.length == 2."},{"constraint":"0 <= newInterval[0] <= newInterval[1] <= 10^5."}],"followup":"","tags":["Array"],"url":"https://leetcode.com/problems/insert-interval/","solutionImg":"57.png"},{"id":"11","index":"435","title":"Non-overlapping Intervals","level":"Medium","statements":[{"id":"0","statement":"Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping."}],"examples":[{"id":"1","example":[{"input":"intervals = [[1,2],[2,3],[3,4],[1,3]]","output":"1"}]},{"id":"2","example":[{"input":"intervals = [[1,2],[1,2],[1,2]]","output":"2"}]},{"id":"3","example":[{"input":"intervals = [[1,2],[2,3]]","output":"0"}]}],"constraints":[{"constraint":"1 <= intervals.length <= 2 * 10^4"},{"constraint":"intervals[i].length == 2"},{"constraint":"-2 * 10^4 <= starti < endi <= 2 * 10^4 "}],"followup":"","tags":["Array"," | ","Dynamic Programming"," | ","Greedy"," | ","Sorting"],"url":"https://leetcode.com/problems/non-overlapping-intervals/","solutionImg":"435.png"},{"id":"12","index":"73","title":"Set Matrix Zeroes","level":"Medium","statements":[{"id":"0","statement":"Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0\'s, and return the matrix."},{"id":"1","statement":"You must do it in place."}],"examples":[{"id":"1","example":[{"input":"matrix = [[1,1,1],[1,0,1],[1,1,1]]","output":"[[1,0,1],[0,0,0],[1,0,1]]"}]},{"id":"2","example":[{"input":"matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]","output":"[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"}]}],"constraints":[{"constraint":"m == matrix.length"},{"constraint":"n == matrix[0].length"},{"constraint":"1 <= m, n <= 200"},{"constraint":"-231 <= matrix[i][j] <= 231 - 1"}],"followup":"A straight forward solution using O(mn) space is probably a bad idea. A simple improvement uses O(m + n) space, but still not the best solution. Could you devise a constant space solution?","tags":["Array"," | ","Matrix"," | ","Hash Table"],"url":"https://leetcode.com/problems/set-matrix-zeroes/","solutionImg":"73.png"},{"id":"13","index":"48","title":"Rotate Image","level":"Medium","statements":[{"id":"0","statement":"You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise)."},{"id":"1","statement":"You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation."}],"examples":[{"id":"1","example":[{"input":"matrix = [[1,2,3],[4,5,6],[7,8,9]]","output":"[[7,4,1],[8,5,2],[9,6,3]]"}]},{"id":"2","example":[{"input":"matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]","output":"[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"}]},{"id":"3","example":[{"input":"matrix = [[1]]","output":"[[1]]"}]}],"constraints":[{"constraint":"matrix.length == n"},{"constraint":"matrix[i].length == n"},{"constraint":"1 <= n <= 20"},{"constraint":"-1000 <= matrix[i][j] <= 1000"}],"followup":"","tags":["Array"," | ","Math"," | ","Matrix"],"url":"https://leetcode.com/problems/rotate-image/","solutionImg":"48.png"},{"id":"14","index":"54","title":"Spiral Matrix","level":"Medium","statements":[{"id":"0","statement":"Given an m x n matrix, return all elements of the matrix in spiral order."}],"examples":[{"id":"1","example":[{"input":"matrix = [[1,2,3],[4,5,6],[7,8,9]]","output":"[1,2,3,6,9,8,7,4,5]"}]},{"id":"2","example":[{"input":"matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]","output":"[1,2,3,4,8,12,11,10,9,5,6,7]"}]}],"constraints":[{"constraint":"m == matrix.length"},{"constraint":"n == matrix[i].length"},{"constraint":"1 <= m, n <= 10"},{"constraint":"-100 <= matrix[i][j] <= 100"}],"followup":"","tags":["Array"," | ","Math"," | ","Simulation"],"url":"https://leetcode.com/problems/spiral-matrix/","solutionImg":"54.png"},{"id":"15","index":"1047","title":"Remove All Adjacent Duplicates In String","level":"Easy","statements":[{"id":"0","statement":"You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.        ."},{"id":"1","statement":"We repeatedly make duplicate removals on s until we no longer can."},{"id":"2","statement":"Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique."}],"examples":[{"id":"1","example":[{"input":"s = \'abbaca\'","output":"\'ca\'"}]},{"id":"2","example":[{"input":"s = \'azxxzy\'","output":"\'ay\'"}]}],"constraints":[{"constraint":"1 <= s.length <= 10^5"},{"constraint":"s consists of lowercase English letters."}],"followup":"","tags":["String"," | ","Stack"],"url":"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/","solutionImg":"1047.png"},{"id":"16","index":"496","title":"Next Greater Element I","level":"Easy","statements":[{"id":"0","statement":"The next greater element of some element x in an array is the first greater element that is to the right of x in the same array."},{"id":"1","statement":"You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2."},{"id":"2","statement":"For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1."},{"id":"3","statement":"Return an array ans of length nums1.length such that ans[i] is the next greater element as described above."}],"examples":[{"id":"1","example":[{"input":"nums1 = [4,1,2], nums2 = [1,3,4,2]","output":"[-1,3,-1]"}]},{"id":"2","example":[{"input":"nums1 = [2,4], nums2 = [1,2,3,4]","output":"[3,-1]"}]}],"constraints":[{"constraint":"1 <= nums1.length <= nums2.length <= 1000"},{"constraint":"0 <= nums1[i], nums2[i] <= 104"},{"constraint":"All integers in nums1 and nums2 are unique"},{"constraint":"All the integers of nums1 also appear in nums2"}],"followup":"Could you find an O(nums1.length + nums2.length) solution?","tags":["Array"," | ","Hash Table"," | ","Stack"," | ","Monotonic Stack"],"url":"https://leetcode.com/problems/next-greater-element-i/","solutionImg":"496.png"},{"id":"17","index":"42","title":"Trapping Rain Water","level":"Hard","statements":[{"id":"0","statement":"Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining."}],"examples":[{"id":"1","example":[{"input":"height = [0,1,0,2,1,0,1,3,2,1,2,1]","output":"6"}]},{"id":"2","example":[{"input":"height = [4,2,0,3,2,5]","output":"9"}]}],"constraints":[{"constraint":"n == height.length"},{"constraint":"0 <= n <= 3 * 10^4"},{"constraint":"0 <= height[i] <= 10^5"}],"followup":"","tags":["Array"," | ","Dynamic Programming"," | ","Stack"," | ","Monotonic Stack"," | ","Two  Pointers"],"url":"https://leetcode.com/problems/next-greater-element-i/","solutionImg":"496.png"}]')},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){var a={"./1.png":28,"./1047.png":29,"./11.png":30,"./121.png":31,"./15.png":32,"./20.png":33,"./238.png":34,"./242.png":35,"./435.png":36,"./48.png":37,"./496.png":38,"./53.png":39,"./54.png":40,"./56.png":41,"./57.png":42,"./73.png":43};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=27},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.2fb183bf.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1047.b862b7a7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/11.cec8f40d.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/121.14449acc.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/15.c78b8cb7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/20.86588c55.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/238.80a73c93.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/242.edd093f7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/435.a2ef3607.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/48.61899d78.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/496.a37a1ba4.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/53.ed3cc29a.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/54.747dd9ff.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/56.2cbf3659.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/57.eb297551.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/73.6d73e258.png"},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(15),r=n.n(s),o=(n(24),n(9)),l=(n.p,n(25),n(8)),c=n.n(l),m=n(7),u=n(46),p=n(16),d=n(12),h=i.a.createContext(),g=h.Provider,x=(h.Consumer,n(1));var b=function(e){var t=i.a.useContext(h),n=(t.active,t.activeProblemHandler);console.log(n);var a=e.day,s=(a.id,a.day),r=a.date,o=a.platform,l=a.problems;return Object(x.jsx)(u.a,{sm:12,md:6,lg:4,className:c.a.Column,children:Object(x.jsxs)(m.a,{border:"primary",style:{width:"20rem"},children:[Object(x.jsxs)(m.a.Header,{className:c.a.CardHeader,style:{backgroundColor:"#121212"},children:[s," ",Object(x.jsxs)("span",{className:c.a.ProblemDate,children:["(",r,")"]})]}),Object(x.jsxs)(m.a.Body,{className:c.a.CardBody,children:[Object(x.jsx)(m.a.Title,{children:o}),Object(x.jsx)(m.a.Text,{className:c.a.Text,children:Object(x.jsx)(d.a,{children:l.map((function(e,t){return Object(x.jsxs)(d.a.Item,{onClick:function(){return n(e.index)},action:!0,"data-action":e.action,variant:e.variant,style:{display:"flex",alignItems:"center",height:"60px",minHeight:"60px",maxHeight:"60px"},children:[Object(x.jsx)("span",{className:c.a.ProblemIndex,children:Object(x.jsx)(p.a,{style:{background:"black",color:"white"},bg:"dark",children:e.index})}),Object(x.jsx)("span",{className:c.a.ProblemName,children:e.problem}),Object(x.jsx)("span",{className:c.a.ProblemIndex})]})}))})})]})]})})},f=n(47),v=n(48),y=n(17);var j=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(f.a,{style:{textAlign:"-webkit-center"},children:[Object(x.jsxs)("h1",{className:c.a.Heading,children:["100 Days Of Code - ",Object(x.jsx)("span",{className:c.a.HeadingYear,children:"2021"})]}),Object(x.jsx)(v.a,{children:y.map((function(e,t){return console.log(e),console.log(t),Object(x.jsx)(b,{day:e},t)}))})]})})},w=n(49),O=n(18),I=n(5),S=n.n(I);var _=function(){var e=i.a.useContext(h),t=e.active,s=e.activeProblemHandler,r=Object(a.useState)({}),l=Object(o.a)(r,2),c=l[0],u=l[1],p=Object(a.useState)(!1),d=Object(o.a)(p,2),g=d[0],b=d[1];return console.log(t),Object(a.useEffect)((function(){return O.filter((function(e){return e.index==t})).map((function(e){b(!0),u(e)})),function(){}}),[]),console.log(c),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{onClick:function(){return s("Home")},className:S.a.Header,children:Object(x.jsx)(w.a,{variant:"success",children:"\u2b05Back"})}),g?Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(m.a.Header,{children:[c.index," - ",c.title]}),Object(x.jsxs)(m.a.Body,{className:"".concat(S.a.CardBody," text-align: left"),children:[Object(x.jsxs)(m.a.Title,{className:"".concat(S.a.ProblemStatement),children:[Object(x.jsx)("span",{className:S.a.StatementTitle,children:"Problem Statement : "}),c.statements.map((function(e){return Object(x.jsx)("span",{className:"".concat(S.a.StatementText),children:e.statement})}))]}),Object(x.jsx)(m.a.Title,{className:"".concat(S.a.ProblemStatement),children:c.examples.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("span",{className:S.a.ExampleTitle,children:["Example : ",e.id]}),Object(x.jsx)("span",{className:"".concat(S.a.ExampleText),children:e.example.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("span",{className:"".concat(S.a.ExampleInput),children:["Input : ",Object(x.jsx)("code",{children:e.input})]}),Object(x.jsx)("pre",{style:{margin:"0px"},children:" "}),Object(x.jsxs)("span",{className:"".concat(S.a.ExampleOutput),children:["Output : ",Object(x.jsx)("code",{children:e.output})]})]})}))})]})}))}),Object(x.jsxs)(m.a.Title,{className:"".concat(S.a.ProblemStatement),children:[Object(x.jsx)("span",{className:S.a.ExampleTitle,children:"Constraints :"}),c.constraints.map((function(e){return Object(x.jsxs)("span",{className:"".concat(S.a.ExampleText),style:{width:"fit-content",padding:"2px 10px",margin:"1px 0px"},children:[Object(x.jsx)("li",{}),Object(x.jsx)("code",{children:e.constraint})]})}))]}),Object(x.jsxs)(m.a.Title,{style:{display:"flex",alignItems:"baseline"},className:"".concat(S.a.ProblemStatement),children:[Object(x.jsx)("span",{className:S.a.StatementTitle,children:"Follow up : "}),Object(x.jsx)("span",{style:{padding:"inherit 10px",marginLeft:"5px"},className:"".concat(S.a.StatementText),children:c.followup})]}),Object(x.jsxs)(m.a.Title,{style:{display:"flex",alignItems:"baseline"},className:"".concat(S.a.ProblemStatement),children:[Object(x.jsx)("span",{className:S.a.StatementTitle,children:"Tags : "}),Object(x.jsx)("span",{style:{padding:"2px 10px",backgroundColor:"rgba(238, 238, 238, 0.342)",borderRadius:"10px",border:"1px solid black",marginLeft:"5px"},className:"".concat(S.a.StatementText),children:c.tags})]}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a.Img,{className:S.a.Image,variant:"bottom",src:n(27)("./"+c.solutionImg).default})}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px 0px"},children:[Object(x.jsx)(w.a,{variant:"primary",onClick:function(){return s("Home")},children:"Back"}),Object(x.jsx)(w.a,{onClick:function(){return window.open("".concat(c.url))},variant:"primary",children:"LeetCode"})]})]}),Object(x.jsxs)(m.a.Footer,{className:"text-muted",children:["Made with \ud83d\udc96 by"," ",Object(x.jsx)("a",{href:"https://amazingdotdp.me/",target:"_blank",children:Object(x.jsx)("code",{style:{fontSize:"1.5rem"},children:"Devarshi"})})," "]})]}):"Loading ..."]})};var T=function(){var e=Object(a.useState)("Home"),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)(g,{value:{active:n,activeProblemHandler:function(e){i(e),console.log(e)}},children:"Home"==n?Object(x.jsx)(j,{}):Object(x.jsx)(_,{})})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};n(44);r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),N()}],[[45,1,2]]]);
//# sourceMappingURL=main.b2992992.chunk.js.map