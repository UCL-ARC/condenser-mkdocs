---
title: Adding a GPU to a host VM manually
---

# Adding a GPU to a host VM manually

It is possible to assign a GPU to your virtual machine by editing its VM definition and adding a hostDevices section to your yaml:

```
kubectl -n arc-gpu-test-ns get vm
NAME             AGE   STATUS    READY
gpu-test-iac-0   32d   Running   True
gpu-test-iac-1   32d   Running   True

kubectl -n arc-gpu-test-ns edit vm gpu-test-iac-0
```

Add the following to the devices section of your yaml (at the level of the other devices in this section):

```
devices:
  disks:
  - bootOrder: 1
    disk:
      bus: virtio
    name: disk-0
  hostDevices:
  - deviceName: nvidia.com/GA100_A100_PCIE_80GB <-- Type of your device
    name: sl-g02-08-000031000                   <-- Name of your device (via pcidevice)
  interfaces:
  - bridge: {} 
```

In order to get the 'deviceName' above, you can use the pcidevice object to get this easily:

```
kubectl get pcidevice sl-g02-08-000031000 -o jsonpath='{.status.resourceName}'
nvidia.com/GA100_A100_PCIE_80GB
```

Once this is saved, you will need to restart the VMI for this VM so that these changes can be picked up - if your VMI was not running on the same machine that the GPU is located at, it will be moved automatically and restarted.


