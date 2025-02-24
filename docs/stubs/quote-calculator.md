---
title: Quote calculator
---

## Quote calculator

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<table>
<tr>
  <th>Resource</th>
  <th></th>
  <th>Quantity</th>
  <th>Price (per year)</th>
</tr>
<tr>
  <td>Compute</td>
  <td>number of vCPU</td>
  <td><input type="number" value="30" min="0" class="qty" id="qty_cpu"/></td>
  <td>£ <span id="text_price_cpu">0</span></td>
</tr>
<tr>
  <td></td>
  <td>additional RAM (number of MB per vCPU)</td>
  <td><input type="number" value="2" min="0" class="qty" id="qty_ram"/></td>
  <td>£ <span id="text_price_ram">0</span></td>
</tr>
<tr>
  <td></td>
  <td>number of GPU type A</td>
  <td><input type="number" value="1" min="0" class="qty" id="qty_gpua"/></td>
  <td>£ <span id="text_price_gpua">0</span></td>
</tr>
<tr>
  <td></td>
  <td>number of GPU type B</td>
  <td><input type="number" value="1" min="0" class="qty" id="qty_gpub"/></td>
  <td>£ <span id="text_price_gpub">0</span></td>
</tr>
<tr>
  <td>Storage</td>
  <td>number of TB</td>
  <td><input type="number" value="2" min="0" class="qty" id="qty_storage"/></td>
  <td>£ <span id="text_price_storage">0</span></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td>Total</td>
  <td>£ <span id="total_value">0</span></td>
</tr>
</table>

<noscript>
<p> This form uses JavaScript. You have disabled scripts in your browser,
so the form will not be functional. Please refer to the table below to estimate the
cost.
<p>
<table>
<tr>
  <th>Resource</th>
  <th></th>
  <th>Price (per year)</th>
</tr>
<tr>
  <td>Compute</td>
  <td>1 vCPU</td>
  <td>£ 10</td>
</tr>
<tr>
  <td></td>
  <td>additional RAM (1 MB per vCPU)</td>
  <td>£ 11</td>
</tr>
<tr>
  <td></td>
  <td>1 GPU type A</td>
  <td>£ 12</td>
</tr>
<tr>
  <td></td>
  <td>1 GPU type B</td>
  <td>£ 13</td>
</tr>
<tr>
  <td>Storage</td>
  <td>1 TB</td>
  <td>£ 14</td>
</tr>
</table>
<p>
For example, to calculate the annual cost of a tenancy with a resource quota of 50
vCPU, with 8 MB of RAM per CPU, with 1 GPU type A, and 5 TB of storage:
<p>
50 × Cost of 1 vCPU
<br>
+ 4 × Cost of 1 additional MB RAM per vCPU × 50
<br>
+ 1 × Cost of 1 GPU type A
<br>
+ 5 × Cost of 1 TB storage

</noscript>
