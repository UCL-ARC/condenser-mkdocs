---
title: Home
---

# Condenser

Condenser is a private cloud platform for UCL. Based on traditional High-Performance
Computing (HPC) hardware, the platform uses virtualisation and containerisation
technologies to support a variety of services- from web applications to HPC clusters
and Trusted Research Environments (TREs). Condenser is designed to enable cost-effective,
cloud-native research computing at UCL.

Condenser is developed and maintained by the Environments team within the
[Advanced Research Computing Centre](https://www.ucl.ac.uk/advanced-research-computing/).
Users can refer to our [Documentation for developers](./documentation/index.md)
for advice about deploying virtual resources on Condenser.

## By the numbers

Condenser comprises a large pool of computing resources, including:

- 8160 cores
- 85TB RAM
- 25 GbE interconnect
- A100, H100, and H200 GPUs

## Technology stack

Condenser is developed using Infrastructure as Code (IaC) and Continuous Integration/Continuous
Deployment (CI/CD) methodologies. Some of the technologies used to build the platform
are:

<table>
  <tr>
    <td>Edge</td>
    <td>
    <a href="https://www.fortinet.com/">Fortinet</a>
    </td>
  </tr>
  <tr>
    <td>Platform</td>
    <td>
    <a href="https://www.rancher.com/">Rancher</a>,
    <a href="https://harvesterhci.io/">Harvester</a>,
    <a href="https://k3s.io/">K3s</a>
    </td>
  </tr>
  <tr>
    <td>Deployment</td>
    <td>
    <a href="https://developer.hashicorp.com/terraform">Terraform</a>,
    <a href="https://developer.hashicorp.com/packer">Packer</a>
    </td>
  </tr>
  <tr>
    <td>Hardware</td>
    <td>
    <a href="https://www.lenovo.com/">Lenovo</a>,
    <a href="https://www.nvidia.com/">Nvidia</a>,
    <a href="https://www.ibm.com/">IBM</a>,
    </td>
  </tr>
</table>
