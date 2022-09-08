## Constants

<dl>
<dt><a href="#getTasks">getTasks</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns a list of tasks ( as a Promise )</p>
</dd>
<dt><a href="#setTasks">setTasks</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets a list of tasks to the Local Storage</p></dd>
<dt><a href="#addTask">addTask</a> ⇒ <code>Promise</code></dt>
<dd><p>Adds a new task to add to the list and updates the list in Local Storage</p></dd>
<dt><a href="#removeTask">removeTask</a> ⇒ <code>Promise</code></dt>
<dd><p>Removes the first matching task from the list and updates the list in Local Storage</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#randomDelay">randomDelay()</a> ⇒ <code>Promise.&lt;unknown&gt;</code></dt>
<dd><p>Creates a random delay ( up to 1000ms ) and returns a promise.</p>
<p>Will &quot;reject&quot; a promise every 5th call</p>
</dd>
</dl>

<a name="getTasks"></a>

## getTasks ⇒ <code>Promise</code>
Returns a list of tasks ( as a Promise )

**Kind**: global constant  
**Returns**: <code>Promise</code> - todoList array wrapped in a Promise  
<a name="setTasks"></a>

## setTasks ⇒ <code>Promise</code>
<p>Sets a list of tasks to the Local Storage</p>

**Kind**: global constant  
**Returns**: <code>Promise</code> - todoList array wrapped in a Promise  

| Param | Type | Description |
| --- | --- | --- |
| newList | <code>Array</code> | a list of tasks |

<a name="addTask"></a>

## addTask ⇒ <code>Promise</code>
<p>Adds a new task to add to the list and updates the list in Local Storage</p>

**Kind**: global constant  
**Returns**: <code>Promise</code> - todoList array wrapped in a Promise  

| Param | Type | Description |
| --- | --- | --- |
| task | <code>string</code> | a new task to add to the list |

<a name="removeTask"></a>

## removeTask ⇒ <code>Promise</code>
<p>Removes the first matching task from the list and updates the list in Local Storage</p>

**Kind**: global constant  
**Returns**: <code>Promise</code> - todoList array wrapped in a Promise  

| Param | Type | Description |
| --- | --- | --- |
| task | <code>string</code> | a task to remove |

<a name="randomDelay"></a>

## randomDelay() ⇒ <code>Promise.&lt;unknown&gt;</code>
Creates a random delay ( up to 1000ms ) and returns a promise.

Will "reject" a promise every 5th call

**Kind**: global function  
