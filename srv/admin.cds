using { dip.test as my } from '../db/core';


service AdminService {
    entity MaintenanceItem as projection on my.MaintenanceItem;
}