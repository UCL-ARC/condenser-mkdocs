---
title: Getting started
---

# Getting Started

The Condenser platform provides pools of compute and storage resources that can be
used to create virtual machines, networks, and volumes.

## Clusters

Condenser is comprised of several Harvester clusters:

| Cluster | Description |
| ---     | ---         |
| sl-p02  | The primary cluster for work on Condenser. Does not contain nodes with GPUs. |
| sl-g01  | A cluster for GPU-based workloads. |
| sl-g02  | A cluster for GPU-based workloads that only contains VAT-exempt GPUs. |

## Deploying virtual resources

Within the UCL network, Condenser can be accessed through [Rancher](https://rancher.condenser.arc.ucl.ac.uk).
Resources can be deployed manually through this interface. Resources can also be
automatically deployed using Infrastructure as Code (IaC) methods such as [Terraform](https://developer.hashicorp.com/terraform/language).

We have documentation demonstrating a simple [Terraform deployment](./deploying_resources/deploying_terraform.md/#configure-the-vm-for-ssh-access)
and the equivalent manual deployment in the [Rancher GUI](./deploying_resources/deploying_rancher.md).

Some advantages of describing deployments with IaC are that deployments become repeatable
and are easier to audit and contribute to. We collect [examples](./examples.md) of
deployments for Condenser.

Both the GUI and Terraform deployments use Harvester to deploy resources on the underlying
kubernetes cluster, which uses [kubevirt](https://kubevirt.io/user-guide/) to provide
virtual machines. In case a deployment requires features that are not yet enabled
by Harvester, resources can also be deployed directly onto a kubernetes cluster with
[`kubectl`](./deploying_resources/deploying_kubernetes.md).

## Administration of virtual resources

On Condenser, developers are responsible for administering their own virtual resources.
Please refer to the appropriate documentation. Some starting points are listed below.

### Operating systems

- [Red Hat Enterprise Linux 9](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/)
- [Almalinux](https://wiki.almalinux.org/)
- [Ubuntu](https://help.ubuntu.com/)
- [Debian](https://www.debian.org/doc/)

### Cloud infrastructure

- [Harvester](https://docs.harvesterhci.io/v1.2/)
- [Cloudinit](https://cloudinit.readthedocs.io/en/latest/)
- [Kubernetes](https://kubernetes.io/docs/home/)
