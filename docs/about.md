---
title: About the platform
---

# About the Platform

Condenser is a private cloud platform for research computing at UCL. It provides
a cost-effective, private alternative to public cloud platforms. The platform is
developed and maintained by the [Advanced Research Computing Centre](https://www.ucl.ac.uk/advanced-research-computing/).
All hardware resides in UCL facilities.

## Tenancy

Access to Condenser is organized in tenant groups. Tenants are responsible for
managing their users and virtual resources. Members of a tenancy are provided with
access to a [Kubernetes](https://kubernetes.io/docs/home/)
cluster. Members can deploy virtual machines and related cloud-computing resources
with [Harvester](https://docs.harvesterhci.io). [Rancher](https://rancher.com/docs/)
is used to provide access to the cluster. Resource quotas are applied to the tenancy.

## Cost

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
  <td>number of GPU</td>
  <td><input type="number" value="1" min="0" class="qty" id="qty_gpu"/></td>
  <td>£ <span id="text_price_gpu">0</span></td>
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
  <td>10 vCPU</td>
  <td>£ 10</td>
</tr>
<tr>
  <td></td>
  <td>additional RAM (1 MB per vCPU)</td>
  <td>£ 10</td>
</tr>
<tr>
  <td></td>
  <td>1 GPU</td>
  <td>£ 10</td>
</tr>
<tr>
  <td>Storage</td>
  <td>2 TB</td>
  <td>£ 10</td>
</tr>
</table>
</noscript>
