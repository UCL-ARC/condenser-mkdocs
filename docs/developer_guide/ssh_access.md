---
title: Configuring a VM for SSH access
---

# Configuring a VM for SSH access

To be accessible by SSH, a VM needs to be configured with a VM Network and the SSH
public key data needs to be provided via [cloudinit](https://cloudinit.readthedocs.io/en/latest/reference/modules.html#ssh).
This is demonstrated for Terraform deployments [here](./deploying_resources/deploying_terraform.md/#configure-the-vm-for-ssh-access)
and for the Rancher GUI [here](./deploying_resources/deploying_rancher.md).

After the VM is configured, the IP address for the VM can be found in the Rancher
GUI or by using `kubectl` with a suitable [kubeconfig file](../stubs/kubeconfig.md)
and the name of the namespace where the VM is deployed:

``` sh
kubectl get virtualmachineinstance.kubevirt.io --namespace my-ns
```

The VM's base image will typically be configured with a default username with SSH
login enabled. The username varies depending on the base image of the VM.

| Image OS  | Default SSH username |
| :-------- | :------------------- |
| RHEL      | `cloud-user`         |
| Almalinux | `almalinux`          |
| Ubuntu    | `ubuntu`             |
| Debian    | `debian`             |

VMs are not typically configured to allow SSH login to the root account.

Follow these instructions to [access a VM with SSH](../end_user_guide/ssh.md).
