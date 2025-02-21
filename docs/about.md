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

<noscript>
This form is a simple JavaScript calculator. You have disabled scripts in your browser,
so the form will not be functional. Please refer to the table below to estimate the
cost.
</noscript>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="container mt-4">
  <div class="row">
    <div class="col-6 row-heading">
       Item
     </div>
    <div class="col-3 row-heading">
      Quantity
    </div>
     <div class="col-2 row-heading">
      Price
     </div>
  </div>

  <div class="row">
    <div class="col-6">
      1. Powdered white sugar (cups)
    </div>
    <div class="col-3">
      <input type="number" value="0" class="qty" id="qty_sugar"/>
    </div>
    <div class="col-2">
      <input type="number" readonly value="0" id="price_sugar"/>
    </div>
  </div>

  <div class="row my-3">
    <div class="col-6">
      2. Butter salted (grams)
    </div>
    <div class="col-3">
      <input type="number" value="0" class="qty" id="qty_butter"/>
    </div>
    <div class="col-2">
      <input type="number" readonly value="0" id="price_butter"/>
    </div>
  </div>

  <div class="row my-3">
    <div class="col-6">
      3. Eggs (count)
    </div>
    <div class="col-3">
      <input type="number" class="qty" value="0" id="qty_eggs"/>
    </div>
    <div class="col-2">
      <input type="number" readonly value="0" id="price_eggs"/>
    </div>
  </div>

  <div class="row my-3">
    <div class="col-6">
      4. Vanilla extract (ml)
    </div>
    <div class="col-3">
      <input type="number" class="qty" value="0" id="qty_vanilla"/>
    </div>
    <div class="col-2">
      <input type="number" readonly value="0" id="price_vanilla"/>
    </div>
  </div>

  <div class="row my-4">
    <div class="col-9 text-right total">
      Total
    </div>

    <div class="col-2 total-val">
      <span id="total_value">0</span>
    </div>
  </div>

</div>
