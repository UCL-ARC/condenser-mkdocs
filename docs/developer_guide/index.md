---
title: Getting started
---

# Getting Started

The Condenser platform provides pools of compute and storage resources that can be
used to create virtual machines, networks, and volumes.

## Deploying virtual resources

Within the UCL network, Condenser can be accessed through [Rancher](https://rancher.condenser.arc.ucl.ac.uk).
Resources can be deployed manually through this interface. Resources can also be
automatically deployed using Infrastructure as Code (IaC) methods.

We have documentation demonstrating a simple [Terraform deployment](./deploying_resources/deploying_terraform.md/#configure-the-vm-for-ssh-access)
and the equivalent manual deployment in the [Rancher GUI](./deploying_resources/deploying_rancher.md).

Some advantages of describing deployments with IaC are that deployments become repeatable
and are easier to audit and contribute to. We collect [examples](./examples.md) of
deployments for Condenser.

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
